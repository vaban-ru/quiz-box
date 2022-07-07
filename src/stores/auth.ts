import { defineStore } from "pinia";

interface IState {
  token: string;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): IState => ({
    token: "",
  }),
  getters: {
    isLoggedIn(): boolean {
      return this.token.length > 0;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      window.localStorage.setItem("token", token);
    },
    logout() {
      this.token = "";
      window.localStorage.removeItem("token");
    },
  },
});
