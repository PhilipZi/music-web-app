<template>
  <app-header />

  <router-view></router-view>
  <!-- Player -->
  <app-player />
  <!-- AppAuth Modal -->
  <app-auth />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppAuth from './components/AppAuth.vue'
import AppPlayer from './components/Player.vue'
import { mapWritableState } from 'pinia'
import useUserStore from './stores/user'
import { auth } from './includes/firebase'

export default {
  name: 'App',
  components: { AppHeader, AppAuth, AppPlayer },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
