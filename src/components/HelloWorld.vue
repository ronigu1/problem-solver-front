<template>
  <div class="container">
      <h1>Form</h1>
      <form>
    <div class="form-group">
      <label for="userID">User ID</label>
      <input v-model="userID" type="number" min="0" class="form-control" id="userID" placeholder="Enter your User ID">
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
    <button type="submit" class="btn btn-primary" @click="submitForm">Submit</button>
      </form>
  </div>
</template>

<script>
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

    async saveFormAndGetStatus(){
      console.log("saveFormAndGetStatus");
      let retStatus;
      try{
        const response = await this.axios.post( 
          this.$root.store.beginning_url.concat(`form/${this.router_name_back}`),
          {
            params:{
              userID: this.userID,
              problemDescription: this.problemDescription,
              deviceSerialNum: this.deviceSerialNum,
              statusLight1: this.selectedStatusLight1,
              statusLight2: this.selectedStatusLight2,
              statusLight3: this.selectedStatusLight3,
            }
          }
        );
        retStatus = response.data;
      }catch (error) {
                console.log(error);
      }
      return retStatus;
    },

    async submitForm() {
      let status;
      console.log("submitForm");
      if (this.userID === '') {
        alert('User ID is required')
        return
      }
      if (this.problemDescription === ''|| this.deviceSerialNum === '') {
        alert('Problem description and Device serial number are required')
        return
      }
      if (this.selectedStatusLight1 === ''|| this.selectedStatusLight2 === '' || this.selectedStatusLight3 === '') {
        alert('All three statuses are required to be filled')
        return
      }
      alert('Form submitted!')
      status = await this.saveFormAndGetStatus();
      alert(status);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.container {
  margin: auto;
  max-width: 700px;
  height: 900px;
  align-items: right;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(36, 79, 119);
  background-color: #e6e6e6;
}

form {
  margin: 40px;
  margin-top: 200px;
}
.form-group{
  margin-top: 20px;
  margin-bottom: 20px;

}
button{
  margin-top: 10px;
}
label{
  margin-bottom: 10px;
}
h1{
  margin-top: 45px;
}
</style>
