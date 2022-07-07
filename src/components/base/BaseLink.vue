<template>
  <router-link class="link" :to="to">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
interface IBaseLinkProps {
  to: object;
}
defineProps<IBaseLinkProps>();
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: var(--primary-400);
  transition: 0.4s ease;

  &:hover {
    color: var(--primary-500);
  }
}
</style>
