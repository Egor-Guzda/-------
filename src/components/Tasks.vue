<template>
  <div class="tasks">
    <h1>Список задач 📝</h1>

    <form @submit.prevent="add" class="task-form">
      <input class="input" v-model="task" placeholder="Описание" />
      <button type="submit" class="btn">Создать задачу</button>
    </form>

    <ol class="tasks-list">
      <li v-for="(task, index) in taskStore.tasks" :key="index" class="task">
        <p class="task-text">
          {{ task }}
        </p>

        <div class="task-actions">
          <button class="btn task-btn" @click="deleteTask(index)">
            Удалить задачу
          </button>
          <button class="btn task-btn" @click="updateTask(index, task)">
            Редактировать задачу
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { useTasks } from "../tasks.store"
import { ref } from "vue";

const task = ref("");
const taskStore = useTasks();

function add() {
  if (!task.value) {
    return;
  }

  taskStore.add(task.value);
  task.value = "";
}

function deleteTask(index) {
  taskStore.delete(index)
}

function updateTask(index, text) {
  const newText = prompt('Введите новый текст', text);

  if (!newText) {
    return
  }

  taskStore.update(index, newText);
}

</script>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
}

.task-form {
  display: flex;
  gap: 0.25rem;
}

.task-form .input {
  width: 100%;
}

.btn {
  -webkit-appearance: none;
  appearance: none;

  background-color: #10b981;
  color: white;
  font-size: 1.25rem;

  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 700;

  transition: background-color 100ms ease-in;
}

.btn:hover,
.btn:focus {
  background-color: #047857;
}

.input {
  padding: 0.75rem 1rem;
  border: 2px solid #cbd5e1;
  border-radius: 0.25rem;

  transition: border-color 100ms ease-in;
  outline: none;
}

.input:focus {
  border-color: #cbd5e1;

}

.input::placeholder {
  color: #cbd5e1;
}

.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 1rem 0;
}

.task {
  display: flex;
  flex-direction: column;

  background-color: #f8fafc;
  border-radius: 0.5rem;
  border: 2px solid #f1f5f9;

  padding: 0.5rem;
}

.task-text {
  width: 100%;
  font-size: 1.25rem;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.task-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
}
</style>
