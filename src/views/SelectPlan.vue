<template>
  <div class="wrapper">
  <h1>Select your plan</h1>
  <p>You have the option of monthly or yearly billing.</p>
  <div class="plans">
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="plan"
      :class="{ activePlan: active[index] }"
      @click="toggleActive(index)"
    >
      <img :src="plan.img" alt="plan" />
      <div>
      <h3>{{ plan.title }}</h3>
      <p v-if="!yearly">${{ plan.price }}/mo</p>
      <div class="yearly" v-if="yearly">
        <p>${{ plan.yearlyPrice }}/yr</p>
        <p class="free">2 months free</p>
      </div>
      </div>
    </div>
  </div>
  <div class="switch-time">
    <h4 class="time" :class="{ active: !yearly }">Monthly</h4>
    <div class="switch">
      <input type="checkbox" v-model="yearly" />
    </div>
    <h4 class="time" :class="{ active: yearly }">Yearly</h4>
  </div>
</div> 
  <footer>
    <h3 @click="back">Go back</h3>
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
          price: 9,
          yearlyPrice: 90,
        },
        {
          img: require("../assets/images/icon-advanced.svg"),
          title: "Advanced ",
          price: 12,
          yearlyPrice: 120,
        },
        {
          img: require("../assets/images/icon-pro.svg"),
          title: "Pro ",
          price: 15,
          yearlyPrice: 150,
        },
      ],
      yearly: false,
      active: [false, false, false],
      plan: "",
      planPrice: 0,
      timeLog: "",
    };
  },
  computed: {
    planSelected() {
      return {
        plan: this.plan,
        planPrice: this.planPrice,
        yearly: this.yearly,
      };
    },
  },
  methods: {
    next() {
      this.check();
      if (this.plan === "") {
        alert("Please select a plan");
        return;
      }
      sessionStorage.setItem("planSelected", JSON.stringify(this.planSelected));
      this.$router.push({ name: "Addons" });
    },
    back() {
      this.$router.go(-1);
    },
    toggleActive(index) {
      if (index === 0) {
        this.active[index] = !this.active[index];
        this.active[1] = false;
        this.active[2] = false;
      } else if (index === 1) {
        this.active[index] = !this.active[index];
        this.active[0] = false;
        this.active[2] = false;
      } else if (index === 2) {
        this.active[index] = !this.active[index];
        this.active[0] = false;
        this.active[1] = false;
      }
    },
    check() {
        if (this.active[0]) {
          if (this.yearly) {
            this.plan = this.plans[0].title;
            this.planPrice = this.plans[0].yearlyPrice;
          } else {
            this.plan = this.plans[0].title;
            this.planPrice = this.plans[0].price;
          }
        } else if (this.active[1]) {
          if (this.yearly) {
            this.plan = this.plans[1].title;
            this.planPrice = this.plans[1].yearlyPrice;
          } else {
            this.plan = this.plans[1].title;
            this.planPrice = this.plans[1].price;
          }
        } else if (this.active[2]) {
          if (this.yearly) {
            this.plan = this.plans[2].title;
            this.planPrice = this.plans[2].yearlyPrice;
          } else {
            this.plan = this.plans[2].title;
            this.planPrice = this.plans[2].price;
          }
        }

    }
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
  padding: 20px 25px 20px 15px;
  text-align: left;
  margin: 5px;
  cursor: pointer;
}

.plan img {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}
.plan h3,
.switch-time h3 {
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  margin-bottom: 7px;
}
.plan p {
  margin: 0;
  font-weight: 100;
  color: hsl(231, 11%, 63%);
}
.activePlan {
  border: 1px solid hsl(243, 100%, 62%);
  background-color: hsl(231, 100%, 99%);
}
.switch-time {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(231, 100%, 99%);
  margin-top: 15px;
  padding: 5px;
}
.switch-time > .time {
  margin: 0 10px;
  color: hsl(229, 24%, 87%);
}
.time.active {
  color: hsl(213, 96%, 18%);
}
.switch > input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 50px;
  height: 0;
  border-radius: 20px;
  background: hsl(213, 96%, 18%);
  transition: background 0.3s;
  outline: none;
  border: none;
  cursor: pointer;
}
.switch > input[type="checkbox"]::after {
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
.switch > input[type="checkbox"]:checked::after {
  left: 60%;
}
.yearly>.free {
  font-size: 13px;
  font-weight: 500;
  color: hsl(213, 96%, 18%);
  margin-top: 4px;
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
footer > h3 {
  color: hsl(231, 11%, 63%);
  cursor: pointer;
}
footer > h3:hover {
  color: hsl(213, 96%, 18%);
}
@media screen and (max-width: 375px) {
  .plans {
    flex-direction: column;
    /* align-items: stretch; */
  }
  .plan {
    width: 80%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
  }
  .plan img {
    margin: 0;
    margin-right: 20px;
  }
  .plan h3 {
    margin: 0;
  }

  footer {
    background-color: hsl(231, 100%, 99%);
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
