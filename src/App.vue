<template>
  <div id="app">
    <div id="navID">
      <ul>
        <!-- <formPage /> -->
        <li><router-link :to="{name: 'main' }"> Home Page </router-link></li>
        <li><router-link :to="{name: 'form' }"> Search Problem </router-link></li>
      </ul>
      
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
ul {
  list-style-type: none;
  margin: 0; 
  padding: 5px;
  overflow: hidden;
  background-color:rgb(169, 202, 233);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  margin-bottom: 15px;
}

li{
  display: inline;
}

li a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
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
