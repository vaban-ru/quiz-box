<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1270px;
  margin: 0 auto;
  padding-left: var(--space-lg);
  padding-right: var(--space-lg);
}
</style>
