<template>
  <div class="auth-form">
    <h2 class="title">Вход</h2>
    <base-input placeholder="Логин" v-model="form.login" />
    <base-input placeholder="Пароль" v-model="form.password" />
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/base/BaseInput.vue";
import { ref } from "vue";

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
  padding: 48px;
  background: var(--background-light);
  border-radius: 24px;

  .title {
    color: var(--white);
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 48px;
  }
}
</style>
