<template>
  <div class="control">
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
  </div>
</template>

<script setup lang="ts">
interface IBaseInputProps {
  placeholder: string;
  disabled?: boolean;
  modelValue: string;
  label: string;
}

interface IBaseInputEmits {
  (event: "update: modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = defineProps<IBaseInputProps>();
const emit = defineEmits<IBaseInputEmits>();

const onInputEvent = (value: string) => {
  emit("update: modelValue", value);
};
const onChangeEvent = (value: string) => {
  emit("change", value);
};
</script>

<style scoped lang="scss">
.control {
  .input {
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid var(--border);
    border-radius: var(--bdrs-sm);
    padding: 8px 16px;
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
}
</style>
