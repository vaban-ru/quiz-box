<template>
  <div :class="controlClass">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :type="controlType"
        class="input"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInputEvent($event.target.value)"
        @change="onChangeEvent($event.target.value)"
      />
      <visibility-toggle v-model="showPassword" v-if="passwordVisibleBtn" />
    </div>
    <div class="error" v-if="errors.length > 0">
      <template v-for="error in errors">
        {{ error.$message }}
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ErrorObject } from "@vuelidate/core";
import VisibilityToggle from "@/components/base/VisibilityToggle.vue";

interface IBaseInputProps {
  placeholder: string;
  disabled?: boolean;
  modelValue: string;
  label: string;
  errors: ErrorObject[];
  type: string;
  passwordVisibleBtn: boolean;
}
interface IBaseInputEmits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = withDefaults(defineProps<IBaseInputProps>(), {
  type: "text",
  passwordVisibleBtn: false,
});
const emit = defineEmits<IBaseInputEmits>();

const onInputEvent = (value: string) => {
  emit("update:modelValue", value);
};
const onChangeEvent = (value: string) => {
  emit("change", value);
};

const showPassword = ref(false);

const controlClass = computed(() => {
  return [
    "control",
    {
      "control--error": props.errors.length > 0,
      "control--pass-visibility": props.passwordVisibleBtn,
    },
  ];
});

const controlType = computed(() => {
  return props.passwordVisibleBtn
    ? showPassword.value
      ? "text"
      : "password"
    : props.type;
});
</script>

<style scoped lang="scss">
.control {
  position: relative;
  .input-wrapper {
    position: relative;
  }
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
  .visibility-toggle {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: var(--space-sm);
  }

  &--error {
    .input {
      border-color: var(--danger-600);
    }
  }

  &--pass-visibility {
    .input {
      padding-right: var(--space-xl);
    }
  }
}
</style>
