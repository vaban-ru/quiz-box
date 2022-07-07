<template>
  <div class="dashboard">
    <h1>DASHOBARD</h1>
    <base-button @click="logout" primary>Выход</base-button>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  if (confirm("Вы действительно хотите выйти?")) {
    const authStore = useAuthStore();
    authStore.logout();
    await router.push({ name: "auth" });
  }
};
</script>
