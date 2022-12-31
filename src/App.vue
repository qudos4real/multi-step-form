<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="main-wrapper">
    <div class="bk-img">
      <nav>    
          <div v-for="item in sidebarData" :key="item.step">
            <h3 class="step">{{item.step}}</h3>
            <p class="title">{{item.title}}</p>
          </div>       
      </nav>
     
    </div>
  </div>

  <router-view/>
</template>

<script>
export default {
  // name: 'App',
  data () {
    return {
      sidebarData: [
        {
          step: 'Step 1',
          title: 'Your Info',
        },
        {
          step: 'Step 2',
          title: 'Select Plan',
        },
        {
          step: 'Step 3',
          title: 'Add-ons',
        },
        {
          step: 'Step 4',
          title: 'Summary',
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-wrapper{
  width: 1440px;
  height: 600px;
}

.bk-img{
  background-image: url("./assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 568px;
  width: 40%;

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
