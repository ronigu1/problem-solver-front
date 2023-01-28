<template>
  <div id="app">
    <div id="navID">
      <nav>
        <router-link class="router" :to="{name: 'main' }"> Home Page </router-link>
        <router-link class="router" :to="{name: 'form' }"> Search Problem </router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
// import formPage from './components/FormPage.vue'

export default {
  name: 'App',
  // components: {
  //   formPage
  // }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  list-style-type: none;
  margin: 0; 
  padding: 5px;
  overflow: hidden;
  background-color:rgb(155, 194, 229);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  margin-bottom: 15px;
}

nav .router {
  display: inline;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav .router:hover {
  background-color:rgb(15, 20, 85);
}
/* nav {
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px
} */

/* #navID a.router-link-active{
    border-right-width: 20px;
    padding-right: 20px;
}

#navID a{
  color:rgb(22, 72, 119);
} */


</style>
