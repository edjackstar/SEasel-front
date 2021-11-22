import {Store} from "vuex";
import createPersistedState from 'vuex-persistedstate'
import User from './user'

export default () => new Store({
modules: {
    user: User
},
  plugins: [
    createPersistedState()
  ]
})
