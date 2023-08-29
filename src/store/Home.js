import { defineStore } from "pinia";

export const useHomestore = defineStore("home", {
  state: () => {
    return {
      name: "张三",
      count: 0,
    };
  },
  actions: {
    /* addcount: () => {
      this.count++;
    },
    deletecount: () => {
      this.count--;
    }, */
  },
});
