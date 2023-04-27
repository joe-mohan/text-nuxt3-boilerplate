import { defineStore } from "pinia";

// Docs https://pinia.vuejs.org/

export const useStore = defineStore({
  id: "main",
  state: () => {
    return {
      test: "test",
    };
  },
  actions: {
    setTest(test) {
      this.test = test;
    },
  },
  getters: {
    reverseTest() {
      return this.test.split("").reverse().join("");
    },
  },
});
