<template>
  <div class="app">
      <div class="theme-toggle" @click="toggleTheme"></div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        toggleTheme() {
            const body = document.body;
            if (body.classList.contains("dark-theme")) {
                body.classList.remove("dark-theme");
            } else {
                body.classList.add("dark-theme");
            }
        }
    }
}
</script>

<style>
html, body, .app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3e3e3e;
  margin-top: 60px;
}

.dark-theme {
    background-color: #2f2f2f !important;
    color: white !important;
}

.theme-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 9999;
}

.home-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 120px;
    background-color: #2f2f2f;
    border: 2px solid #3e3e3e;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 8px;
    transition: all 0.3s ease;
}

.home-button:hover {
    background-color: #3e3e3e;
    transform: scale(1.1);
}
</style>
