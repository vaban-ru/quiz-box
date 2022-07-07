<template>
  <div class="auth-form">
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
import BaseInput from "@/components/base/BaseInput.vue";
import { reactive } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

interface IAuthForm {
  login: string;
  password: string;
}

const form = reactive<IAuthForm>({
  login: "",
  password: "",
});

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

const v$ = useVuelidate(validationRules, form);

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    alert("Форма будет отправлена!");
  }
};
</script>

<style lang="scss">
.auth-form {
  padding: var(--space-lg);
  background: var(--background-contrast);
  border-radius: var(--bdrs-md);

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
