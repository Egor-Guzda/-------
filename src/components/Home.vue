<template>
  <div class="home">
    <h1>Приветствую на главной странице!</h1>
    <router-link to="/tasks">Перейти к задачам</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 50px;
}

a {
  text-decoration: none;
  color: #3498db;
  font-size: 1.2em;
  border: 1px solid #3498db;
  padding: 10px 20px;
  border-radius: 5px;
}

a:hover {
  background-color: #3498db;
  color: white;
}
</style>
