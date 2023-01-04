<template>
  <h2>Select your plan</h2>
  <p>You have the option of monthly or yearly billing.</p>
  <div class="plans">

    <div v-for="(plan, index) in plans" :key="index" class="plan" :class="{activePlan : active[index]}" @click="toggleActive(index)">
      <img :src="plan.img" alt="plan" />
      <h3>{{ plan.title }}</h3>
      <p>{{ plan.price }}</p>
    </div>
  </div>
  <div class="switch-time">
    <h3 class="time" :class="{active : !yearly}">Monthly</h3>
    <div class="switch">
      <input type="checkbox" v-model="yearly">
    </div>
    <h3 class="time" :class="{active : yearly}">Yearly</h3>
  </div>
  <footer>
    <h3 @click="back"> Go back</h3>
    <button class="btn footerItem" @click="next">Next</button>
  </footer>
</template>

<script>
export default {
  name: "SelectPlan",
  data() {
    return {
      plans: [
        {
          img: require("../assets/images/icon-arcade.svg"),
          title: "Arcade",
          price: "$9/mo",
        },
        {
          img: require("../assets/images/icon-advanced.svg"),
          title: "Advanced ",
          price: "$12/mo",
        },
        {
          img: require("../assets/images/icon-pro.svg"),
          title: "Pro ",
          price: "$15/mo",
        },
      ],
      yearly: false,
      selectArcade: false,
      selectAdvanced: false,
      selectPro: false,
      active: [false, false, false]
    };
  },
  methods: {
    next() {
      this.$router.push({ name: "Addons" });
    },
    back() {
      this.$router.go(-1);
    },
    toggleActive(index) {
      if(index === 0) {
        this.active[index] = !this.active[index];
        console.log(this.active[index]);
      } else if(index === 1) {
        this.active[index] = !this.active[index];
        console.log(this.active[index]);
      } else if(index === 2) {
        this.active[index] = !this.active[index];
        console.log(this.active[index]);
      }
    },  
    // selectPlan(plan) {
      // 
      // if (plan.title === "arcade") {
      //   this.selectArcade = true;
      //   this.selectAdvanced = false;
      //   this.selectPro = false;
      //   console.log(this.selectArcade);
      // } else if (plan === "advanced") {
      //   this.selectArcade = false;
      //   this.selectAdvanced = true;
      //   this.selectPro = false;
      //   console.log(this.selectAdvanced);
      // } else if (plan === "pro") {
      //   this.selectArcade = false;
      //   this.selectAdvanced = false;
      //   this.selectPro = true;
      //   console.log(this.selectPro);
      // }
    
  },
};
</script>

<style>
.plans {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.plan {
  width: 20%;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px 35px 20px 15px;
  text-align: left;
  margin: 5px;
  cursor: pointer;
}

.plan img {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}
.plan h3, .switch-time h3 {
  /* font-size: 14px; */
  font-weight: 700;
  color: rgba(0, 0, 139, 0.856);
  margin-bottom: 7px;
}
.plan p {
  margin: 0;
  font-weight: 100;
  color: #00000070;
}
.plan.activePlan {
  border: 1px solid blue;
}
.switch-time {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(207, 203, 203, 0.205);
  margin-top: 15px;
  padding: 5px; 
}
.switch-time>.time {
  margin: 0 10px;
  color: rgba(0, 0, 0, 0.521);
}
.time.active {
  color: darkblue;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 50px;
  height: 0;
  border-radius: 20px;
  background: darkblue;
  transition: background 0.3s;
  outline: none;
  border: none;
  cursor: pointer;
}
input[type="checkbox"]::after {
  content: "";
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #fff;
  top: 5px;
  left: 0;
  transition: 0.3s;
  border: none;
  outline: none;
}
input[type="checkbox"]:checked::after {
  left: 60%;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
}
.btn.footerItem {
  margin: 0 10px 0 0;
}
footer>h3 {
  color: rgba(0, 0, 139, 0.856);
  cursor: pointer;
}
</style>
