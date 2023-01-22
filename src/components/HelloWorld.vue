<template>
  <div class="container">
      <h1>Form</h1>
      <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="userID">User ID</label>
      <input v-model="userID" type="number" min="0" class="form-control" id="userID" placeholder="Enter your User ID number">
    </div>
    <div class="form-group">
      <label for="problemDescription">Problem description</label>
      <textarea  v-model="problemDescription" v-bind:maxlength="300"  type="text" class="form-control" id="problemDescription" placeholder="Enter your Problem description"></textarea>
    </div>
    <div class="form-group">
      <label for="deviceSerialNum">Device serial number</label>
      <input v-model="deviceSerialNum" v-bind:maxlength="64" type="text" class="form-control" id="deviceSerialNum" placeholder="Enter your Device serial number (Example : 24-X-125447-DC)">
    </div>
    <div class="form-group">
      <label for="statusIndicatorLight1">Status Indicator Light 1</label>
      <select v-model="selectedStatusLight1" class="form-control" id="statusIndicatorLight1" placeholder="Select Status">
        <option value="" disabled>Please tap here to select an option</option>
        <option v-for="option in options" :value="option.value" :key="option.value"> {{ option.text }} </option>
      </select>
    </div>
    <div class="form-group">
      <label for="statusIndicatorLight2">Status Indicator Light 2</label>
      <select v-model="selectedStatusLight2" class="form-control" id="statusIndicatorLight2" placeholder="Select Status">
        <option value="" disabled>Please tap here to select an option</option>
        <option v-for="option in options" :value="option.value" :key="option.value"> {{ option.text }} </option>
      </select>
    </div>
    <div class="form-group">
      <label for="statusIndicatorLight3">Status Indicator Light 3</label>
      <select v-model="selectedStatusLight3" class="form-control" id="statusIndicatorLight3" placeholder="Select Status">
        <option value="" disabled>Please tap here to select an option</option>
        <option v-for="option in options" :value="option.value" :key="option.value"> {{ option.text }} </option>
    </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'myForm',
  data() {
    return {
      router_name_back:"insertFormRow",
      userID: '',
      problemDescription: '',
      deviceSerialNum: '',
      selectedStatusLight1: '',
      selectedStatusLight2: '',
      selectedStatusLight3: '',
      options: [
        { value: 'off', text: 'off' },
        { value: 'on', text: 'on' },
        { value: 'blinking', text: 'blinking'}],
    };
  },
  methods: {

    async submitForm() {
      //using Vue Simple Alert
      let status;
      console.log("submitForm");
      if (this.userID === '') {
        this.$alert('User ID is required','','warning')
        return
      }
      if (this.problemDescription === ''|| this.deviceSerialNum === '') {
        this.$alert('Problem description and Device serial number are required','','warning')
        return
      }
      if (this.selectedStatusLight1 === ''|| this.selectedStatusLight2 === '' || this.selectedStatusLight3 === '') {
        this.$alert('All three statuses are required to be filled','','warning')
        return
      }
      // this.$alert('Form submitted!')

      try{
        console.log("in try",this);
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          `${this.$root.store.server_domain}/form/insertFormRow`,
        // const response = await this.axios.post('http://localhost:3000/form/insertFormRow',
        {
              userID: this.userID,
              problemDescription: this.problemDescription,
              deviceSerialNum: this.deviceSerialNum,
              statusLight1: this.selectedStatusLight1,
              statusLight2: this.selectedStatusLight2,
              statusLight3: this.selectedStatusLight3,
            }
        );
      console.log("after try");
      status = response.data;
      console.log(status);
      }catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
      this.$alert(status,"The response:",'success');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.container {
  /* font-family: ‘Merriweather’, Georgia, serif; */
  margin: auto;
  max-width: 700px;
  height: 900px;
  align-items: right;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(36, 79, 119);
  background-color: #e6e6e6;
  font-size: 19px;
}
input,textarea,select {
  border-radius: 5px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;}
form {
  margin: 40px;
}
.form-group{
  padding: 10px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
button{
  border-radius: 10px;
  margin-top: 10px;
  size: 50px;
  background-color: rgb(143, 167, 190);
  border: 2px solid rgb(36, 79, 119);
  width: 94%;
}

h1{
  margin-top: 45px;
}

</style>
