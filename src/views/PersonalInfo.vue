<template>
  <h2>Personal info</h2>
  <p>Please provide your name, email address, and phone number.</p>
  <form novalidate="true">
    <label
      >Name <span class="error" v-if="nameError">{{ nameError }}</span></label
    >
    <input
      type="text"
      placeholder="e.g. Stephen King"
      required
      v-model="name"
      :class="{ errorInput: nameError }"
    />
    <label
      >Email Address
      <span class="error" v-if="emailError">{{ emailError }}</span></label
    >
    <input
      type="email"
      placeholder="e.g. stephenking@lorem.com"
      required
      v-model="email"
      :state="null"
      :class="{ errorInput: emailError }"
    />
    <label
      >Phone Number
      <span class="error" v-if="phoneError">{{ phoneError }}</span></label
    >
    <input
      type="tel"
      placeholder="e.g. +1 234 567 890"
      required
      v-model="phone"
      :class="{ errorInput: phoneError }"
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
      ActivePage: 1,
      checkActive: false,
    };
  },
  methods: {
    submit: function () {
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
        // localStorage.setItem("name", this.name);
        // localStorage.setItem("email", this.email);
        // localStorage.setItem("phone", this.phone);
        sessionStorage.setItem("userData", JSON.stringify(this.userData));
        this.$router.push({ name: "SelectPlan" });
      }
    },
    // checkActivePage: function () {
    //   if (this.ActivePage === 1) {
    //     this.checkActive = true;
    //   } else {
    //     this.checkActive = false;
    //   }
    //   console.log(this.checkActive);
    // },
  },
  // mounted() {
  //   this.checkActivePage();
  // },

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
input.errorInput {
  border: 1px solid red;
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
.btn:hover {
  background-color: rgba(0, 0, 255, 0.781);
}
.error {
  color: red;
  font-weight: 600;
  float: right;
  clear: right;
}
</style>
