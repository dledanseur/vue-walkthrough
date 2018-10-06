<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.email">
          <td>{{u.name}}</td>
          <td>{{u.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "UserList",
  methods: {
    ...mapActions('users', ['listUsers'])
  },
  computed: {
    ...mapState('users', {
      'users': (state) => state.list
    })
  },
  mounted: function() {
    this.listUsers()
  }
}
</script>