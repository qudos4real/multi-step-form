<template>
  <div class="wrapper">
    <h1>Personal info</h1>
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
    </form>
  </div>
  <button class="btn" @click.stop.prevent="submit">Next</button>
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
      ActivePage: 0,
      emits: ["activePage"],
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
        this.userData.push({
          name: this.name,
          email: this.email,
          phone: this.phone,
        });
        sessionStorage.setItem("userData", JSON.stringify(this.userData));
        this.$router.push({ name: "SelectPlan" });
      }
    },
  },
  mounted() {
    this.ActivePage = 1;
    this.$emit("activePage", this.ActivePage);
  },
};
</script>

<style>
h1 {
  color: hsl(213, 96%, 18%);
  margin-bottom: 5px;
}
h1 + p {
  color: hsl(231, 11%, 63%);
  margin-top: 5px;
  margin-bottom: 35px;
}
form > label {
  display: block;
  margin: 25px 0 10px 0;
  font-weight: 400;
  color: hsl(213, 96%, 18%);
}
input {
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid hsl(229, 24%, 87%);
  color: hsl(213, 96%, 18%);
  font-weight: 700;
}
input.errorInput {
  border: 1px solid hsl(354, 84%, 57%);
}
input:focus {
  outline: none;
  border: 1px solid hsl(243, 100%, 62%);
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
  background-color: hsl(213, 96%, 18%);
  color: hsl(217, 100%, 97%);
  font-weight: 700;
  margin-top: 100px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(0, 0, 255, 0.781);
}
.error {
  color: hsl(354, 84%, 57%);
  float: right;
  clear: right;
}
@media screen and (max-width: 375px) {
  .wrapper {
    padding: 20px;
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 10px;
    background-color: hsl(0, 0%, 100%);
  }
}
</style>
