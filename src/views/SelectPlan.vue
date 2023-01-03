<template>
  <h2>Select your plan</h2>
  <p>You have the option of monthly or yearly billing.</p>
  <div class="plans">
    <div v-for="plan in plans" :key="plan.title" class="plan" @click="selectPlan">
      <img :src="plan.img" alt="plan" />
      <h3>{{ plan.title }}</h3>
      <p>{{ plan.price }}</p>
    </div>
  </div>
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
      selectArcade: false,
      selectAdvanced: false,
      selectPro: false,
    };
  },
  methods: {
    selectPlan(plan) {
      console.log(plan.target.children[1].innerText);
      
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
.plan h3 {
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
</style>
