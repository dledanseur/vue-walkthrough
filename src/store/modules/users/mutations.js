import * as mutationTypes from './mutation_types'

let listUsersMutation = mutationTypes.LIST_USERS
let saveUserMutation = mutationTypes.ADD_USER

export default {
  [listUsersMutation]: (state, {users}) => {
    state.list = users
  },

  [saveUserMutation]: (state, {user}) => {
    state.list.push(user)
  }
}
