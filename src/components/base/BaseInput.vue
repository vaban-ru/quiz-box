<template>
  <div class="control">
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
    border-radius: 24px;
    padding: 12px 16px;
    width: 100%;
    transition: 0.8s;
    color: var(--text);
    font-size: 18px;

    &::placeholder {
      color: var(--text);
    }

    &:focus {
      border-color: var(--text);
    }
  }
  & + & {
    margin-top: 24px;
  }
}
</style>
