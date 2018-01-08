
<template>
  <div>
  <form-helper>
    <div slot="form-header">
      <h3>This is Title of The Form</h3>
      <p>Info about form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Name" required>
      <input type="password" placeholder="Password" required>
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Submit</button>
    </div>
  </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return {
      title: 'I am a dynamic slot title!'
    }
  },
  methods: {
   
  }
}
</script>

<style >

</style>