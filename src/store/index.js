import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from "./AuthModule";

Vue.use(Vuex)

export default new Vuex.Store({
  //외부 자바스크립트(xxx.js)를 정의해서 쓰는 곳
  modules: {
    auth
  }
})

