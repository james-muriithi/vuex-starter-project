import { createStore } from 'vuex';
import counterModule from "./store/modules/counter";
import authModule from "./store/modules/auth";

export default createStore({
  modules: {
    numbers: counterModule,
    auth: authModule
  }
});
