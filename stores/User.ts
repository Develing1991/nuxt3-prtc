import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
      useRouter().push("/");
    },
  },
});
