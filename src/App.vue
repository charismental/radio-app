<template>
  <div id="app">
    <player />
    <router-view v-if="!expandedPlayer" />
  </div>
</template>
<script>
// @ is an alias to /src
import Player from '@/components/Player.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Player
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
  position: relative;
  background: url(./assets/background.png) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #FFF;
  display: grid;
  height: 100vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media screen and (min-width: 768px) {
    #app {
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 360px;
    max-height: 640px;
  }
}
</style>
