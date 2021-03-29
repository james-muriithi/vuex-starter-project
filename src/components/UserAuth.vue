<template>
    <div class="mt-3">
        <button class="btn btn-primary" @click="login" v-if="!userIsAuthenticated">Login</button>
        <button class="btn btn-danger ml-3" @click="logout" v-else>Logout</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['userIsAuthenticated']),
    }
}
</script>
