<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="main-wrapper">
    <div class="common-section">
      <ol>
        <li v-for="item in sidebarData" :key="item.step">
          <h3 class="step">{{ item.step }}</h3>
          <p class="title">{{ item.title }}</p>
        </li>
      </ol>
    </div>
    <div class="main-section">
      <PersonalInfo />
    </div>
  </div>

  <router-view />
</template>

<script>
import PersonalInfo from "./views/PersonalInfo.vue";
export default {
  // name: 'App',
  components: {
    PersonalInfo,
  },
  data() {
    return {
      sidebarData: [
        {
          step: "Step 1",
          title: "Your Info",
        },
        {
          step: "Step 2",
          title: "Select Plan",
        },
        {
          step: "Step 3",
          title: "Add-ons",
        },
        {
          step: "Step 4",
          title: "Summary",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: hsl(217, 100%, 97%);
}



.main-wrapper {
  max-width: 750px;
  /* height: 600px; */
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
}
.common-section {
  background-image: url("./assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: auto;
  width: 40%;
  height: 568px;
  /* margin: 5px; */
  display: inline-block;
}
.main-section {
  width: 55%;
  text-align: left;
  margin: 30px;
}

/* .main-wrapper {
  width: 1000px;
  height: 600px;
  padding: 5px; 
  display: inline-flex;
  justify-content: center;
  margin-top: 30px;
  
}

.common-section {
  background-image: url("./assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 568px;
  width: 20%;
  display: inline-block;
}
.main-section {
  background-color: #f5f5f5;
  display: inline-block;
  height: 568px;
  width: 40%;
  display: inline-block;
}
.step {
  font-size: 14px;
  font-weight: 700;
  color: hsl(231, 11%, 63%);
  margin-top: 20px;
}
.title {
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin-top: 20px;
}
ol li::marker {
  background-color: aqua;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
