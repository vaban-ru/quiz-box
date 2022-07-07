<template>
  <div class="dashboard">
    <base-container>
      <div class="title">Ваши квизы</div>
      <base-card> </base-card>
    </base-container>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseCard from "@/components/base/BaseCard.vue";
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--font-size-lg);
  color: var(--text);
  margin-bottom: var(--space-xl);
}
</style>
