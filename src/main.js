import { createApp } from 'vue';
import { createStore } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  getters: {
    finalCount: state => {
      return state.counter;
    },
    userIsAuthenticated(state){
      return state.isLoggedIn
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  }
});

app.use(store);

app.mount('#app');
