<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/tasks">Задачи</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  max-width: 512px;
  margin: 0 auto;
}

nav {  
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.5rem;
}

nav a {
  color: inherit;
  transition: color 100ms ease-in;
  font-weight: 500;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-exact-active {
  color: #10b981;
}
</style>
