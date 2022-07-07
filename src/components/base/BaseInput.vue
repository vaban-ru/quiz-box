<template>
  <div :class="controlClass">
    <label class="label" v-if="label">{{ label }}</label>
    <input
      type="text"
      class="input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInputEvent($event.target.value)"
      @change="onChangeEvent($event.target.value)"
    />
    <div class="error" v-if="errors.length > 0">
      <template v-for="error in errors">
        {{ error.$message }}
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ErrorObject } from "@vuelidate/core";

interface IBaseInputProps {
  placeholder: string;
  disabled?: boolean;
  modelValue: string;
  label: string;
  errors: ErrorObject[];
}

interface IBaseInputEmits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = defineProps<IBaseInputProps>();
const emit = defineEmits<IBaseInputEmits>();

const onInputEvent = (value: string) => {
  emit("update:modelValue", value);
};
const onChangeEvent = (value: string) => {
  emit("change", value);
};

const controlClass = computed(() => {
  return [
    "control",
    {
      "control--error": props.errors.length > 0,
    },
  ];
});
</script>

<style scoped lang="scss">
.control {
  position: relative;

  .input {
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid var(--border);
    border-radius: var(--bdrs-sm);
    padding: var(--space-xs) var(--space-sm);
    width: 100%;
    height: 46px;
    transition: 0.8s;
    color: var(--text);
    font-size: var(--font-size-md);

    &::placeholder {
      color: var(--neutral);
    }

    &:focus {
      border-color: var(--text);
    }
  }
  .label {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--neutral);
    margin-bottom: var(--space-sm);
  }
  .error {
    font-size: var(--font-size-sm);
    color: var(--danger-600);
    position: absolute;
    bottom: -18px;
  }

  &--error {
    .input {
      border-color: var(--danger-600);
    }
  }
}
</style>
