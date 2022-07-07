<template>
  <the-header v-if="isLoggedIn" />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/ui/TheHeader.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);
</script>
