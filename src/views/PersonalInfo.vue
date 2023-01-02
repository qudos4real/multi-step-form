<template>
  <h2>Personal info</h2>
  <p>Please provide your name, email address, and phone number.</p>
  <form novalidate="true">
    <label
      >Name <span v-if="nameError">{{ nameError }}</span></label
    >
    <input
      type="text"
      placeholder="e.g. Stephen King"
      required
      v-model="name"
    />
    <label
      >Email Address <span v-if="emailError">{{ emailError }}</span></label
    >
    <input
      type="email"
      placeholder="e.g. stephenking@lorem.com"
      required
      v-model="email"
      :state="null"
    />
    <label
      >Phone Number <span v-if="phoneError">{{ phoneError }}</span></label
    >
    <input
      type="tel"
      placeholder="e.g. +1 234 567 890"
      required
      v-model="phone"
    />
    <button class="btn" @click.stop.prevent="submit">Next</button>
  </form>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      userData: [],
      nameError: "",
      emailError: "",
      phoneError: "",
      errorMessage: "This field is required",
    };
  },
  methods: {
    submit: function (e) {
      e.preventDefault();
      if (!this.name) {
        this.nameError = this.errorMessage;
      }
      if (!this.email) {
        this.emailError = this.errorMessage;
      }
      if (!this.phone) {
        this.phoneError = this.errorMessage;
      }
      if (this.name && this.email && this.phone) {
        console.log("Submitted form");
        this.userData.push({
          name: this.name,
          email: this.email,
          phone: this.phone,
        });
        console.log(this.userData);
        this.$router.push({ name: "SelectPlan" });
      }

      // if (this.name && this.email && this.phone) {
      //   console.log("Submitted form");
      //   this.userData.push({
      //     name: this.name,
      //     email: this.email,
      //     phone: this.phone,
      //   });
      //   console.log(this.userData);
      //   console.log(this.userData[0].phone);
      //   this.$router.push({ name: "SelectPlan" });
      // } else {
      //   this.errorMessage = "Please fill all the fields";

      // }
    },
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // },
  },
};
</script>

<style>
form > label {
  display: block;
  margin: 25px 0 5px 0;
  font-weight: 600;
}
input {
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  color: blue;
}
input:focus {
  outline: none;
  border: 1px solid blue;
  cursor: pointer;
}
.btn {
  float: right;
  clear: right;
  display: block;
  width: 30%;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  background-color: blue;
  color: hsl(217, 100%, 97%);
  font-weight: 600;
  margin-top: 80px;
  cursor: pointer;
}
</style>
