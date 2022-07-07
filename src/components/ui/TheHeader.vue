<template>
  <div class="header">
    <base-container>
      <div class="wrapper">
        <div class="logo">Quiz Box</div>
        <div class="menu">
          <base-link class="menu-link" :to="{ name: 'dashboard' }">
            Мои квизы
          </base-link>
          <base-link class="menu-link" :to="{ name: 'settings' }">
            Настройки
          </base-link>
        </div>
        <base-button sm @click="logout" primary>Выход</base-button>
      </div>
    </base-container>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import BaseLink from "@/components/base/BaseLink.vue";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  if (confirm("Вы действительно хотите выйти?")) {
    authStore.logout();
    await router.push({ name: "auth" });
  }
};
</script>

<style scoped lang="scss">
.header {
  padding: var(--space-lg) 0;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(2 1 1 / 10%) 0 5px 20px -5px;
  margin-bottom: var(--space-xl);
  .logo {
    color: var(--white);
    font-size: var(--font-size-lg);
    font-weight: 300;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    margin-right: auto;
    margin-left: var(--space-xl);
  }
  .menu-link {
    color: var(--text);
    font-size: var(--font-size-md);
    font-weight: 500;

    & + .menu-link {
      margin-left: var(--space-xl);
    }

    &.router-link-active,
    &.router-link-exact-active,
    &:hover {
      color: var(--primary-500);
    }
  }
}
</style>
