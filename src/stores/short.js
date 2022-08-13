import { defineStore } from "pinia";

export default defineStore("short", {
  state: () => ({
    isOpen2: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen2 ? "hidden" : "";
    },
  },
});
