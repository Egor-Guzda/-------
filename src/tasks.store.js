import { defineStore } from "pinia";

export const useTasks = defineStore("tasks", {
  state: () => ({
    tasks: loadTasks(),
  }),

  actions: {
    add(text) {
      this.tasks.push(text);
      saveTasks(this.tasks);
    },

    update(index, text) {
      this.tasks[index] = text;
      saveTasks(this.tasks);
    },

    delete(index) {
      this.tasks.splice(index, 1);
      saveTasks(this.tasks);
    },
  },

  hydrate(store) {
    try {
      store.tasks = loadTasks();
    } catch (error) {
      console.log({ error });
    }
  },
});

function saveTasks(value) {
  localStorage.setItem("tasks", JSON.stringify(value));
}

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  } catch {
    return [];
  }
}
