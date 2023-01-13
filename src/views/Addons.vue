<template>
  <div class="wrapper">
  <h1>Pick add-ons</h1>
  <p>Add-ons help enhance your gaming experience.</p>
  <div class="addonWrapper">
    <div v-for="addon, index in addonServices" :key="index" class="addonList" :class="{activePlan : checkModel[addon.normIndex]==true}">
      <div>
        <input type="checkbox" v-model="checkModel[addon.normIndex]"/>
        <div class="titleDesc">
          <h3>{{ addon.title }}</h3>
          <p>{{ addon.desc }}</p>
        </div>
      </div>
      <h3 class="price">
        ${{ addon.price }}/mo
      </h3>
    </div>
  </div>
  </div>
    <footer class="addonsFooter">
      <h3 @click="back">Go back</h3>
      <button class="btn footerItem" @click="next">Next</button>
    </footer>
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
          price: 1,
          normIndex: 1,
        },
        {
          title: "Larger storage",
          desc: "Extra 1TB of cloud save",
          price: 2,
          normIndex: 2,
        },
        {
          title: "Customizable Profile",
          desc: "Custom theme on your profile",
          price: 2,
          normIndex: 3,
        },
      ],
      checkModel: [false, false, false],
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
        addon1 : {
          title: "",
          price: 0,
        },
        addon2 : {
          title: "",
          price: 0,
        },
        addon3 : {
          title: "",
          price: 0,
        },
        addonSelected: {
      },
      activePlan: 0,
      emits : ['activePlan']
    };
  },
  methods: {
    next() {
      this.check();
      sessionStorage.setItem("addons", JSON.stringify(this.addonSelected));
      this.$router.push({ name: "Summary" });
    },
    back() {
      this.$router.go(-1);
    },
    check() {
      if (this.checkModel[1]) {
        this.addon1.title = this.addonServices[0].title;
        this.addon1.price = this.addonServices[0].price;
        this.addon1.yearPrice = this.addonServices[0].price * 10;
        this.addonSelected.addon1 = this.addon1;
      }
      if (this.checkModel[2]) {
        this.addon2.title = this.addonServices[1].title;
        this.addon2.price = this.addonServices[1].price;
        this.addon2.yearPrice = this.addonServices[1].price * 10;
        this.addonSelected.addon2 = this.addon2;
      }
      if (this.checkModel[3]) {
        this.addon3.title = this.addonServices[2].title;
        this.addon3.price = this.addonServices[2].price;
        this.addon3.yearPrice = this.addonServices[2].price * 10;
        this.addonSelected.addon3 = this.addon3;
      }
  
    },
  },
  mounted() {
    this.activePlan = 3;
      this.$emit("activePlan", this.activePlan);
  }
};
</script>

<style>
.addonList {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: 15px;
  margin: 12px 0;
  border-radius: 15px;
  cursor: pointer;
}
.addonList.activePlan {
  border: 1px solid blue;
}
.addonList > div {
  display: flex;
  align-items: center;
}
.addonList input {
  margin: 0;
  width: auto;
  margin: auto 30px auto 10px;
  transform: scale(1.5);
  color: hsl(231, 11%, 63%);
  cursor: pointer;
}

.titleDesc > h3 {
  /* margin: 0; */
  margin-bottom: 5px;
  color: hsl(213, 96%, 18%);
}
.titleDesc > p {
  margin-top: 5px;
  font-size: 14px;
  color: hsl(231, 11%, 63%);
}
.price {
  color: hsl(243, 100%, 62%);
}
.addonsFooter {
  margin-top: 50px;
}
@media screen and (max-width: 375px) {
  .addonList input {
    margin: auto 15px auto 10px;
  }
}
</style>
