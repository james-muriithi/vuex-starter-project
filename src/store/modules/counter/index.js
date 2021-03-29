import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const counterModule = {
    state() {
      return {
        counter: 0
      };
    },
    mutations,
    getters,
    actions,
  };

  export default counterModule;