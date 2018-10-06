import * as mutationTypes from './mutation_types'

let listUsersMutation = mutationTypes.LIST_USERS

export default {
  [listUsersMutation]: (state, {users}) => {
    state.list = users
  }
}
