
<template>
   <div id="app">
    <nav>
      <router-link to="/">Buscador de Coordenadas</router-link> |
      <router-link to="/paises">Lista de Países</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
 
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
