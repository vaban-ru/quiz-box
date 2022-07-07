<template>
  <div class="auth-form">
    <base-loader v-if="loading" />
    <form @submit.prevent="submitForm" action="#">
      <h2 class="title">Вход в аккаунт</h2>
      <div class="grid">
        <base-input
          :errors="v$.login.$errors"
          label="Логин"
          placeholder="Логин"
          v-model="form.login"
        />
        <base-input
          password-visible-btn
          type="password"
          :errors="v$.password.$errors"
          label="Пароль"
          placeholder="Пароль"
          v-model="form.password"
        />
        <base-button type="submit" gradient block>Войти</base-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/base/inputs/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseLoader from "@/components/base/BaseLoader.vue";
import useVuelidate from "@vuelidate/core";
import type IAuth from "@/types/IAuth";
import api from "@/services/api";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";
import { useAuthStore } from "@/stores/auth";

/**
 * Данные формы авторизации
 */
const form = reactive<IAuth>({
  login: "",
  password: "",
});

/**
 * Правила валидации формы авторизации
 */
const validationRules = {
  login: {
    required: helpers.withMessage("Обязательно для заполнения", required),
    minLength: helpers.withMessage("Некорректное значение", minLength(4)),
    maxLength: helpers.withMessage("Некорректное значение", maxLength(24)),
  },
  password: {
    required: helpers.withMessage("Обязательно для заполнения", required),
    minLength: helpers.withMessage("Некорректное значение", minLength(4)),
    maxLength: helpers.withMessage("Некорректное значение", maxLength(24)),
  },
};

/**
 * Объект валидации
 */
const v$ = useVuelidate(validationRules, form);

/**
 * Стор для авторизации
 */
const authStore = useAuthStore();

/**
 * Инстанс роутреа
 */
const router = useRouter();

/**
 * Флаг загрузки
 */
const loading = ref(false);

/**
 * Метод отправки формы авторизации
 */
const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    loading.value = true;
    const { success, token } = await api.auth(form);
    if (success && token) {
      loading.value = false;
      authStore.setToken(token);
      await router.push({ name: "dashboard" });
    }
  }
};
</script>

<style lang="scss">
.auth-form {
  padding: var(--space-lg);
  background: var(--background-contrast);
  border-radius: var(--bdrs-md);
  position: relative;
  overflow: hidden;

  .grid {
    display: grid;
    flex-direction: column;
    width: 100%;
    gap: var(--space-xl);
  }

  .title {
    margin-top: 0;
    color: var(--white);
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
