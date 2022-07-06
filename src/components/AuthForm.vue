<template>
  <div class="auth-form">
    <h2 class="title">Вход в аккаунт</h2>
    <div class="grid">
      <base-input label="Логин" placeholder="Логин" v-model="form.login" />
      <base-input label="Пароль" placeholder="Пароль" v-model="form.password" />
      <base-button gradient block>Войти</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/base/BaseInput.vue";
import { ref } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";

interface IAuthForm {
  login: string;
  password: string;
}

const form = ref<IAuthForm>({
  login: "",
  password: "",
});
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
    gap: var(--space-lg);
  }

  .title {
    margin-top: 0;
    color: var(--white);
    font-size: 24px;
    font-weight: 500;
    margin-bottom: var(--space-xl);
  }
}
</style>
