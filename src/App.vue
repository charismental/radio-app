<template>
  <div id="app">
    <Slide width="360" :crossIcon="false" :burgerIcon="false" noOverlay @closeMenu="menuDisable" :isOpen="menuToggle">
      <router-link to="/" @click.native="expandPlayerCloseMenu">
        <i class="material-icons">home</i><span>Home</span>
      </router-link>
      <router-link to="/" @click.native="minimizePlayer">
        <i class="material-icons">skip_previous</i><span>History</span>
      </router-link>
      <router-link to="/queue" @click.native="minimizePlayer">
        <i class="material-icons">skip_next</i><span>Upcoming</span>
      </router-link>
      <router-link to="/speakers" @click.native="minimizePlayer">
        <i class="material-icons">schedule</i><span>Schedule</span>
      </router-link>
      <router-link to="/requests" @click.native="minimizePlayer">
        <i class="material-icons">music_note</i><span>Requests</span>
      </router-link>
      <router-link to="/" @click.native="minimizePlayer">
        <i class="material-icons">attach_money</i><span>Donate</span>
      </router-link>
      <router-link to="/about" @click.native="minimizePlayer">
        <i class="material-icons">info</i><span>About</span>
      </router-link>
      <router-link to="/" @click.native="minimizePlayer">
        <i class="material-icons">feedback</i><span>Contact</span>
      </router-link>
    </Slide>
    <player />
    <router-view v-if="!expandedPlayer" />
    <more-info-modal />
  </div>
</template>
<script>
// @ is an alias to /src
import Player from '@/components/Player.vue'
import MoreInfoModal from '@/components/MoreInfoModal.vue'
import { Slide } from 'vue-burger-menu'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    Player,
    MoreInfoModal,
    Slide
  },
  computed: {
    ...mapState([
      'expandedPlayer',
      'menuToggle'
    ])
  },
  methods: {
    ...mapMutations([
      'minimizePlayer',
      'expandPlayerCloseMenu',
      'menuDisable'
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
.bm-menu {
  z-index: 50;
  opacity: .9;
}
.bm-menu a {
  color: white;
}
@media screen and (min-width: 768px) {
    #app {
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 360px;
    max-height: 640px;
    margin-top: 8px;
  }
    .bm-menu {
    left: 274px;
    height: 581px;
    top: 8px;
    border-radius: 10px;
  }
}
</style>
