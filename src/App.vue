<template>
  <div class="main-wrapper">
    <div class="common-section">
      <div v-for="item in sidebarData" :key="item.key" class="list">
        <div class="key-wrap" :class="checkActiveClass(item.key)">
          <h3 class="key">{{ item.key }}</h3>
        </div>
        <div class="list2">
          <h3 class="step">{{ item.step }}</h3>
          <p class="title">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="main-section">
      <router-view @activePlan="setPlan" />
    </div>
  </div>
</template>

<script>
import PersonalInfo from "./views/PersonalInfo.vue";
export default {
  name: "App",
  components: {
    PersonalInfo,
  },
  data() {
    return {
      sidebarData: [
        {
          key: 1,
          step: "Step 1",
          title: "Your Info",
        },
        {
          key: 2,
          step: "Step 2",
          title: "Select Plan",
        },
        {
          key: 3,
          step: "Step 3",
          title: "Add-ons",
        },
        {
          key: 4,
          step: "Step 4",
          title: "Summary",
        },
      ],
      activePlan: 1,
    };
  },
  methods: {
    activeStep() {
      this.activeStep = true;
    },
    setPlan(plan) {
      this.activePlan = plan;
    },
    checkActiveClass(key) {
      if (key === this.activePlan) {
        return "active";
      }
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Ubuntu";
  src: url("./assets/fonts/Ubuntu-Regular.ttf");
}
@font-face {
  font-family: "Ubuntu";
  font-weight: 500;
  src: url("./assets/fonts/Ubuntu-Medium.ttf");
}
@font-face {
  font-family: "Ubuntu";
  font-weight: 700;
  src: url("./assets/fonts/Ubuntu-Bold.ttf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  font-family: "Ubuntu", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: hsl(217, 100%, 97%);
}

.main-wrapper {
  max-width: 800px;
  /* height: 600px; */
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  padding: 15px;
}
.common-section {
  background-image: url("./assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: auto;
  width: 40%;
  height: 568px;
  /* margin: 5px; */
  /* display: inline-block; */
}
.list {
  margin: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
}
.list > .key-wrap {
  border: white solid 1px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
.key {
  position: relative;
  top: -8px;
  color: hsl(0, 0%, 100%);
}
.list2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.step {
  font-size: 14px;
  font-weight: 100;
  color: hsl(229, 24%, 87%);
  margin: 10px 0 0 0;
  font-weight: 100;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: hsl(231, 100%, 99%);
  margin-top: 5px;
}
.main-section {
  width: 60%;
  text-align: left;
  margin: 0 30px;
}

.key-wrap.active {
  background-color: hsl(206, 94%, 87%);
  border-color: hsl(206, 94%, 87%);
}
.key-wrap.active > .key {
  color: hsl(213, 96%, 18%);
}

/* Adding breakpoints for responsiveness */

@media only screen and (max-width: 375px) {
  body {
    width: 100%;
    background-color: hsl(217, 100%, 97%);
  }
  .main-wrapper {
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: hsl(217, 100%, 97%);
  }
  .common-section {
    background-image: url("./assets/images/bg-sidebar-mobile.svg");
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 170px;
  }
  .main-section {
    width: 90%;
    margin: -70px auto;
    /* background-color: white; */
    /* border-radius: 1.5em 1.5em 0 0; */
  }
  .list2 {
    display: none;
  }
  .list {
    height: 0;
    margin: 50px 0;
    padding: 0;
  }
  .key-wrap {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .key {
    position: relative;
    top: -10px;
  }
}
</style>
