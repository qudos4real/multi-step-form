<template>
  <h2>Pick add-ons</h2>
  <p>Add-ons help enhance your gaming experience.</p>
  <div class="addonWrapper">
    <div v-for="addon in addonServices" :key="addon.name" class="addonList">
      <input type="checkbox">
      <div>
        <h3>{{ addon.title }}</h3>
        <p>{{ addon.desc }}</p>
      </div>
      {{ addon.price }}

    </div>
  </div>
</template>

<script>
export default {
  name: "Addons",
  data() {
    return {
    addonServices: [
      {
        title: "Online service",
        desc: "Access to multiplayer games",
        price: "$1/mo",
      },
      {
        title: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price: "$2/mo",
      },
      {
        title: "Customizable Profile",
        desc: "Custom theme on your profile",
        price: "$2/mo",
      },
    ],
    };
  },
};
</script>

<style>
.addonList {
  display: flex;
  align-items: center;
}
</style>
