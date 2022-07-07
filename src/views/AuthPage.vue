<template>
  <div class="auth-page">
    <auth-form />
  </div>
</template>

<script setup lang="ts">
import AuthForm from "@/components/AuthForm.vue";
</script>

<style lang="scss">
.auth-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
