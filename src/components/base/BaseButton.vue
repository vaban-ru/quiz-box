<template>
  <component
    :class="buttonClass"
    :is="buttonComponent"
    :type="type"
    :href="href"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IBaseButtonProps {
  type?: string | null;
  href?: string | null;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  gradient?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  type: "button",
});

const buttonComponent = computed(() => {
  return props.href ? "a" : "button";
});

const buttonClass = computed(() => {
  return [
    "btn",
    {
      "btn--primary": props.primary,
      "btn--secondary": props.secondary,
      "btn--success": props.success,
      "btn--info": props.info,
      "btn--warning": props.warning,
      "btn--danger": props.danger,
      "btn--gradient": props.gradient,
      "btn--block": props.block,
    },
  ];
});
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  box-sizing: border-box;
  font-weight: 500;
  user-select: none;
  text-align: center;
  white-space: nowrap;
  transition: 0.4s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--bdrs-sm);
  text-decoration: none;
  min-height: 46px;

  &:active {
    transform: translateY(2px);
  }

  &--block {
    width: 100%;
  }

  &--primary {
    background: var(--primary-600);
    color: var(--white);

    &:hover {
      background: var(--primary-700);
    }
  }

  &--secondary {
    background: var(--secondary-600);
    color: var(--secondary-100);

    &:hover {
      background: var(--secondary-700);
      color: var(--secondary-200);
    }
  }

  &--info {
    background: var(--info-600);
    color: var(--info-100);

    &:hover {
      background: var(--info-700);
      color: var(--info-200);
    }
  }
  &--success {
    background: var(--success-800);
    color: var(--success-200);

    &:hover {
      background: var(--success-900);
      color: var(--success-400);
    }
  }
  &--warning {
    background: var(--warning-800);
    color: var(--warning-200);

    &:hover {
      background: var(--warning-900);
      color: var(--warning-400);
    }
  }
  &--danger {
    background: var(--danger-800);
    color: var(--danger-200);
    &:hover {
      background: var(--danger-900);
      color: var(--danger-400);
    }
  }
  &--gradient {
    background: var(--gradient);
    color: var(--white);
  }
}
</style>
