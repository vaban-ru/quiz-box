<template>
  <div @click="togglePasswordVisibility" class="visibility-toggle">
    <icon-visibility-off v-if="modelValue" />
    <icon-visibility v-else />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import IconVisibilityOff from "@/components/icons/IconVisibilityOff.vue";
import IconVisibility from "@/components/icons/IconVisibility.vue";

interface IVisibilityToggleProps {
  modelValue: boolean;
}
interface IVisibilityToggleEmits {
  (event: "update:modelValue", value: boolean): void;
}

const emit = defineEmits<IVisibilityToggleEmits>();
const props = defineProps<IVisibilityToggleProps>();

const togglePasswordVisibility = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<style scoped lang="scss">
.visibility-toggle {
  .icon {
    fill: var(--neutral);
  }
}
</style>
