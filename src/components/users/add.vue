<template>
  <div>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" v-model="name"/>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" v-model="email"/>
    </div>
    <button type="submit" @click="submit">Submit</button>
  </div>
  
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: "UserAdd",
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    ...mapActions('users', ['saveUser']),

    async submit() {
      await this.saveUser({
        name: this.name,
        email: this.email
      })

      this.$router.push('/users')
    }
  }
}
</script>
