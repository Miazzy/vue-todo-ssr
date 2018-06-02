import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'

export default () => {
  const store = new Vuex.Store({
    state,
    mutations,
    getters
  })
  return store
}
