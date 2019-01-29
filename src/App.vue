<template>
  <div id="app">
    <radio-player />
    <router-view v-if="!expandedPlayer" />
  </div>
</template>
<script>
// @ is an alias to /src
import RadioPlayer from '@/components/RadioPlayer.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    RadioPlayer
  },
  computed: {
    ...mapState([
      'expandedPlayer'
    ])
  }
}
</script>
<style>
#app {
  background: url(./assets/background.png) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #FFF;
  display: grid;
  height: 100vh;
}
@media screen and (min-width: 768px) {
    #app {
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 360px;
    height: 640px;
  }
}
</style>
