import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "../views/AuthPage.vue";
import DashboardPage from "../views/DashboardPage.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
      meta: {
        auth: false,
      },
    },
    {
      path: "/",
      name: "dashboard",
      component: DashboardPage,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const { isLoggedIn } = authStore;
  if (to.name !== "auth" && !isLoggedIn && to.meta.requiresAuth) {
    next({ name: "auth" });
  } else if (to.name === "auth" && isLoggedIn) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
