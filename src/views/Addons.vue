<template>
  <h2>Pick add-ons</h2>
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
        {{ addon.price }}
      </h3>
    </div>
    <footer class="addonsFooter">
      <h3 @click="back">Go back</h3>
      <button class="btn footerItem" @click="next">Next</button>
    </footer>
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
          normIndex: 1,
        },
        {
          title: "Larger storage",
          desc: "Extra 1TB of cloud save",
          price: "$2/mo",
          normIndex: 2,
        },
        {
          title: "Customizable Profile",
          desc: "Custom theme on your profile",
          price: "$2/mo",
          normIndex: 3,
        },
      ],
      checkModel: [false, false, false],
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
        addon1 : {
          title: "",
          price: "",
        },
        addon2 : {
          title: "",
          price: "",
        },
        addon3 : {
          title: "",
          price: "",
        },
        addonSelected: {
      },
    };
  },
  methods: {
    next() {
      this.check();
      sessionStorage.setItem("addons", JSON.stringify(this.addonSelected));
      console.log(sessionStorage);
      this.$router.push({ name: "Summary" });
    },
    back() {
      this.$router.go(-1);
    },
    check() {
      if (this.checkModel[1]) {
        this.addon1.title = this.addonServices[0].title;
        this.addon1.price = this.addonServices[0].price;
        this.addonSelected.addon1 = this.addon1;
      }
      if (this.checkModel[2]) {
        this.addon2.title = this.addonServices[1].title;
        this.addon2.price = this.addonServices[1].price;
        this.addonSelected.addon2 = this.addon2;
      }
      if (this.checkModel[3]) {
        this.addon3.title = this.addonServices[2].title;
        this.addon3.price = this.addonServices[2].price;
        this.addonSelected.addon3 = this.addon3;
      }
  
    },
  },
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
  color: rgba(128, 128, 128, 0.603);
  cursor: pointer;
}

.titleDesc > h3 {
  /* margin: 0; */
  margin-bottom: 5px;
  color: darkblue;
}
.titleDesc > p {
  /* margin: 0; */
  margin-top: 3px;
  font-size: 14px;
  color: rgba(128, 128, 128, 0.603);
}
.price {
  color: rgba(0, 0, 255, 0.781);
}
.addonsFooter {
  margin-top: 50px;
}
</style>
