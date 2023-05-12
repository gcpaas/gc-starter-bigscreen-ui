import Vue from 'vue'
import Vuex from 'vuex'
import bigScreen from '../views/bigScreen/store/page/index.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bigScreen
  }
})

export default store
