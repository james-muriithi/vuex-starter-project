import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  getters: {
    finalCount: state => {
      return state.counter;
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  }
});

app.use(store);

app.mount('#app');
