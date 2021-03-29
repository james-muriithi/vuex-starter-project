<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
  <div class="dropdown-divider"></div>
    <h3>{{ counter }}</h3>
    <button class="btn btn-primary" @click="addOne">Add 1</button>
  </base-container>
  
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    UserAuth
  },
  computed: {
    // counter() {
    //   console.log(this.$store.getters.finalCount);
    //   return this.$store.getters.finalCount;
    // },
    ...mapGetters({
      counter: 'finalCount',
      userIsAuthenticated: 'userIsAuthenticated'
    })
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>