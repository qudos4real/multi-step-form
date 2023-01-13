<template>
  <div class="wrapper">
  <h1>Finishing up</h1>
  <p>Double-check everything looks OK before confirming.</p>
  <div class="summaryWrapper">
    <div class="flex">
      <div>
        <h3 class="planPicked">
          {{ planSelected.plan }} <span>({{ yearly }}ly)</span>
        </h3>

        <router-link to="/SelectPlan" class="router">Change</router-link>
      </div>
      <p>${{ planSelected.planPrice }}{{ per }}</p>
    </div>
    <hr />
    <div class="add-ons">
      <div v-for="addon in addons" :key="addon.title">
        <p class="addons">
          {{ addon.title }}
          <span v-if="!planSelected.yearly"
            >${{ addon.price }}{{ per }}</span
          ><span v-if="planSelected.yearly"
            >${{ addon.yearPrice }}{{ per }}</span
          >
        </p>
      </div>
    </div>
  </div>
  <div class="total">
    <p class="sumText">
      Total <span>(per {{ yearly }})</span>
    </p>
    <p class="sum">{{ total }}{{ per }}</p>
  </div>
</div>
  <footer class="addonsFooter">
    <h3 @click="back">Go back</h3>
    <button class="btn footerItem" @click="next">Next</button>
  </footer>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      planSelected: {},
      addonsSelected: {},
      yearly: "",
      addons: {},
      total: 0,
      per: "",
      yearAddonPrice: 0,
    };
  },
  methods: {
    next: function () {
      sessionStorage.setItem("Total", JSON.stringify(this.total));
      this.$router.push({ name: "ThankYou" });
    },
    back() {
      this.$router.go(-1);
    },
    totals() {
      this.total += this.planSelected.planPrice;
      if (this.planSelected.yearly) {
        for (const key in this.addons) {
          this.total += this.addons[key].yearPrice;
        }
      } else {
        for (const key in this.addons) {
        this.total += this.addons[key].price;
      }
      }
    }
    },
  mounted() {
    this.planSelected = JSON.parse(sessionStorage.getItem("planSelected"));
    console.log(sessionStorage);
    if (this.planSelected.yearly) {
      this.yearly = "Year";
      this.per = "/yr";
    } else {
      this.yearly = "Month";
      this.per = "/mo";
    }
    this.addons = JSON.parse(sessionStorage.getItem("addons"));
    this.totals();
  },
};
</script>

<style>
.summaryWrapper {
  border-radius: 15px;
  padding: 15px;
  margin-top: 50px;
  background-color: hsl(231, 100%, 99%);
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex > p {
  margin: 0;
  height: auto;
  color: hsl(213, 96%, 18%);
  font-weight: 700;
}
.planPicked {
  margin: 10px auto;
  color: hsl(213, 96%, 18%);
}
.router {
  color: hsl(231, 11%, 63%);
}
.addons {
  display: flex;
  justify-content: space-between;
  color: hsl(231, 11%, 63%);
}
.addons > span {
  color: hsl(213, 96%, 18%);
}
.total {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.total span {
  text-transform: lowercase;
}
.sumText {
  color: hsl(231, 11%, 63%);
}
.total > .sum {
  font-weight: 700;
  color: blue;
  font-size: 20px;
}
</style>
