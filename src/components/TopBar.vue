<template>
    <div class="top-bar">
        <div class="arrow-icon" @click="toggleExpandedPlayer">
          <i class="material-icons md-36" v-if="!expandedPlayer">expand_more</i>
          <i class="material-icons md-36" v-else>expand_less</i>
        </div>
        <div class="title-bar"><router-link to="/requests" @click.native="minimizePlayer"><span>Radiomv.org</span></router-link></div>
        <div class="live-notice"><span class="live">LIVE&nbsp;&nbsp;</span><div class="live-dot"></div></div>
        <div class="nav-arrows">
          <router-link to="/" @click.native="minimizePlayer"><i class="material-icons md-36">navigate_before</i></router-link>
          <router-link to="/queue" @click.native="minimizePlayer"><i class="material-icons md-36">navigate_next</i></router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapState([
      'expandedPlayer'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleExpandedPlayer',
      'minimizePlayer'
    ])
  }
}
</script>

<style>
.material-icons.md-36 { font-size: 36px; }
.top-bar {
    display: grid;
    grid-auto-columns: 1fr 2.5fr 1.5fr 2fr;
    grid-template-areas: "aa bb cc dd"
}
.arrow-icon {
  grid-area: aa;
  padding: 2px;
  cursor: pointer;
}
.title-bar {
  padding-top: 8px;
  grid-area: bb;
  font-weight: 250;
  font-size: 18px;
}
.title-bar a {
  text-decoration: none;
  color: #FFF;
}
.nav-arrows {
  grid-area: dd;
  padding-top: 2px;
  margin-left:auto;
  margin-right:0;
  cursor: pointer;
}
.nav-arrows a {
  color: white;
}
.live-notice {
  grid-area: cc;
  display: inline-flex;
  justify-content: flex-end;
}
.live {
  padding-top: 10px;
  font-weight: 500;
  color: red;
  border-radius: 100%;
  animation: pulse 1.5s ease-out;
  animation-iteration-count: infinite;
}
.live-dot {
  margin-top: 13px;
  width: 8px;
  height: 8px;
  border: 1px solid red;
  background-color: red;
  border-radius: 100%;
  animation: pulse 1.5s ease-out;
  animation-iteration-count: infinite;
  opacity: 0.75;
}
@keyframes pulse {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        opacity: 0.5;
    }
}
</style>
