<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: var(--space-lg);
  background: var(--background-contrast);
  border-radius: var(--bdrs-md);
  position: relative;
  overflow: hidden;
}
</style>
