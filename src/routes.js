import Home from './components/home'
import UserList from './components/users/list'
import UserAdd from './components/users/add'

export default [
  { path: '/', component: Home },
  { path: '/users', component: UserList },
  { path: '/users/add', component: UserAdd }
]
