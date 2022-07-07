import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assets/reset.scss";
import { useAuthStore } from "@/stores/auth";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const authStore = useAuthStore();
const token = window.localStorage.getItem("token") || "";
authStore.setToken(token);

app.mount("#app");
