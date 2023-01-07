<template>
  <h2>Finishing up</h2>
  <p>Double-check everything looks OK before confirming.</p>
  <div class="summaryWrapper">
    <div class="flex">
      <div>
        <h3 class="planPicked">
          {{ planSelected.plan }} <span>({{ yearly }}ly)</span>
        </h3>

        <router-link to="/SelectPlan" class="router">Change</router-link>
      </div>
      <p>{{ planSelected.planPrice }}</p>
    </div>
    <hr />
    <div class="add-ons">
      <div v-for="addon in addons" :key="addon.title">
        <p class="addons">
          {{ addon.title }} <span>{{ addon.price }}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="total">
    <p sumText>Total <span>(per {{ yearly }})</span></p> <p class="sum">+12/mo</p>
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
      planSelected: "",
      addonsSelected: "",
      yearly: "",
      addons: "",
      total: 0
    };
  },
  methods: {},
  next: function() {
    sessionStorage.setItem("Total", JSON.stringify(this.total));
      this.$router.push({ name: "ThankYou" });
  },
  back() {
      this.$router.go(-1);
    },
  mounted() {
    console.log(sessionStorage);
    this.planSelected = JSON.parse(sessionStorage.getItem("planSelected"));
    if (this.planSelected.yearly) {
      this.yearly = "Year";
    } else {
      this.yearly = "Month";
    }
    this.addons = JSON.parse(sessionStorage.getItem("addons"));
  },
};
</script>

<style>
.summaryWrapper {
  border: 2px solid black;
  border-radius: 15px;
  padding: 15px;
  margin-top: 50px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex > p {
  margin: 0;
  height: auto;
  color: darkblue;
  font-weight: 700;
}
.planPicked {
  margin: 10px auto;
  color: darkblue;
}
.router {
  color: gray;
}
.addons {
  display: flex;
  justify-content: space-between;
  color: gray;
}
.addons>span {
  color: rgba(0, 0, 139, 0.85);
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
  color: grey;
}
.total>.sum {
  font-weight: 700;
  color: blue;
  font-size: 20px;
}
</style>
