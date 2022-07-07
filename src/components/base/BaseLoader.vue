<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
@keyframes blue-pending-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(#000000, 0.5);
  z-index: 100;

  &:after {
    content: "";
    display: block;
    border: 1px solid transparent;
    border-bottom-color: var(--primary-300);
    border-top-color: var(--primary-300);
    transition: 0.1s ease-in-out;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: blue-pending-animation 0.8s linear infinite;
    width: 32px;
    height: 32px;
    margin: -16px 0 0 -16px;
    z-index: 200;
  }
}
</style>
