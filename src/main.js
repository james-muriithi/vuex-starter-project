import { createApp } from 'vue';
import { createStore } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';

const app = createApp(App);

const counterModule = {
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  getters: {
    finalCount: state => {
      return state.counter;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  }
};

const authModule = {
  state(){
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.isLoggedIn
    }
  }
}

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule,
  },
});

app.use(store);

app.mount('#app');
