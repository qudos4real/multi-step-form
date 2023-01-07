<template>
  <h2>Finishing up</h2>
  <p>Double-check everything looks OK before confirming.</p>
  <div class="summaryWrapper">
    <div class="flex">
    <div>
      <h3>{{ planSelected.plan }} <span>({{ yearly }}ly)</span></h3>

      <router-link to="/SelectPlan">Change</router-link>
    </div>
    <p>{{ planSelected.planPrice }}</p>
  </div>
    <hr>
    <div class="add-ons">
      <h3>Add-ons</h3>
      <div v-for="addon in addons" :key="addon.title" >
        <p class="addons">  {{ addon.title }} <span>{{ addon.price }}</span></p>

      </div>

      </div>

  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
      planSelected: "",
      addonsSelected: "",
      yearly: "",
      addons: ""
    };
  },
  methods: {
  },
  mounted() {
    console.log(sessionStorage);
    this.planSelected = JSON.parse(sessionStorage.getItem("planSelected"))
    if (this.planSelected.yearly) {
      this.yearly = "Year"
    } else {
      this.yearly = "Month"
    }
    this.addons = JSON.parse(sessionStorage.getItem("addons"))
  },
};
</script>

<style>
.summaryWrapper {
  border: 2px solid black;
  border-radius: 15px;
  padding: 15px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex>p {
  margin: 0;
  height: auto;
}
.addons {
  display: flex;
  justify-content: space-between;
}
</style>
