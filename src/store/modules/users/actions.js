import axios from 'axios'
import * as mutationTypes from './mutation_types'

export const listUsers = async ({commit}) => {
  let resp = await axios.get('http://demo7403400.mockable.io/users')
  
  commit(mutationTypes.LIST_USERS, {users: resp.data});
}

export const saveUser = async ({commit}, {name, email}) => {
  let data = {
    name,
    email
  }

  await axios.post('http://demo7403400.mockable.io/users', data)

  commit(mutationTypes.ADD_USER, {user: data})

}