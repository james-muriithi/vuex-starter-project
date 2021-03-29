<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    // counter() {
    //   console.log(this.$store.getters.finalCount);
    //   return this.$store.getters.finalCount;
    // },
    ...mapGetters({
      counter: 'finalCount'
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