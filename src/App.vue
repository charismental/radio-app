<template>
  <div id="app">
    <Slide width="500" :burgerIcon="false" noOverlay @closeMenu="menuDisable" :isOpen="menuToggle">
      <router-link to="/" @click.native="minimizePlayer">
        <i class="material-icons">info</i><span>About</span>
      </router-link>
      <router-link to="/history" @click.native="minimizePlayer">
        <i class="material-icons">skip_previous</i><span>History</span>
      </router-link>
      <router-link to="/queue" @click.native="minimizePlayer">
        <i class="material-icons">skip_next</i><span>Upcoming</span>
      </router-link>
      <router-link to="/schedule" @click.native="minimizePlayer">
        <i class="material-icons">schedule</i><span>Schedule</span>
      </router-link>
      <router-link to="/requests" @click.native="minimizePlayer">
        <i class="material-icons">music_note</i><span>Requests</span>
      </router-link>
      <router-link to="/donate" @click.native="minimizePlayer">
        <i class="material-icons">attach_money</i><span>Donate</span>
      </router-link>
      <router-link to="/contact" @click.native="minimizePlayer">
        <i class="material-icons">feedback</i><span>Contact</span>
      </router-link>
      <router-link to="/favorites" @click.native="minimizePlayer">
        <i class="material-icons">favorite</i><span>Favorites</span>
      </router-link>
      <router-link to="/">
        <i class="material-icons">library_music</i>
        <input type="radio" id="high" value="8000" :checked="streamPort === 8000" @click="pauseChangeQuality(8000)">
        <label for="high">HQ</label>
        <input type="radio" id="med" value="8006" :checked="streamPort === 8006" @click="pauseChangeQuality(8006)">
        <label for="med">MQ</label>
        <input type="radio" id="low" value="8004" :checked="streamPort === 8004" @click="pauseChangeQuality(8004)">
        <label for="low">LQ</label>
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Player,
    MoreInfoModal,
    Slide
  },
  computed: {
    ...mapState([
      'expandedPlayer',
      'menuToggle',
      'streamPort'
    ])
  },
  methods: {
    ...mapMutations([
      'minimizePlayer',
      'menuDisable'
    ]),
    ...mapActions([
      'pauseChangeQuality'
    ])
  }
}
</script>
<style>
body {
  background: linear-gradient(to bottom left, #4c3f77, #051126);
}
#app {
  position: relative;
  background: linear-gradient(to bottom right, #7c587f, #4c3f77);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #a4bcbc;
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
  /* padding-top: 25px !important; */
}
.bm-menu a {
  color: white;
}
@media screen and (min-width: 768px) {
    #app {
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 500px;
    max-height: 740px;
    margin-top: 5%;
  }
    .bm-menu {
    left: 50% !important;
    height: 681px !important;
    margin-left: -250px;
    margin-top: 5% !important;
    border-radius: 10px;
  }
}
@media screen and (max-height: 580px) {
  .bm-menu {
    padding-top: 20px;
  }
}
</style>
