<template>
    <h2>Personal info </h2>
  <p>Please provide your name, email address, and phone number. </p>
  <form>
    <label>Name</label>
    <input type="text" placeholder="e.g. Stephen King" required/>
    <label>Email Address</label>
    <input type="email" placeholder="e.g. stephenking@lorem.com" required/>
    <label>Phone Number</label>
    <input type="tel" placeholder="e.g. +1 234 567 890" required/>
<router-link to="SelectPlan">Select Plan</router-link>
    <button class="btn" type="submit">Next</button>
  </form>
</template>

<script>
export default {

}
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