<template>
  <div :class="[expandedPlayer ? 'player' : 'player1']">
    <top-bar />
    <current-album-art />
    <current-meta />
    <feedback />
    <timer />
    <div class="play-container" @click="playPause" @keyup.space="playPause">
      <i class="material-icons" :class="[expandedPlayer ? 'md-96' : 'md-48']" v-if="!isPlaying">play_circle_outline</i>
      <i class="material-icons" :class="[expandedPlayer ? 'md-96' : 'md-48']" v-else>pause_circle_outline</i>
        <audio id="audio" :src="currentStream">
        Your browser does not support the audio element.
        </audio>
    </div>
    <div class="more-info">
      <i class="material-icons" @click="setToggleModal(songInfo)" :class="[expandedPlayer ? 'md-84' : 'md-36']">more_horiz</i>
    </div>
    <volume />
  </div>
</template>

<script>
import Timer from './Timer.vue'
import Volume from './Volume.vue'
import Feedback from './Feedback.vue'
import TopBar from './TopBar.vue'
import CurrentAlbumArt from './CurrentAlbumArt.vue'
import CurrentMeta from './CurrentMeta.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Player',
  components: {
    Feedback,
    Timer,
    Volume,
    TopBar,
    CurrentAlbumArt,
    CurrentMeta
  },
  data () {
    return {
      currentStream: 'http://136.0.16.57:8000/.stream'
    }
  },
  methods: {
    ...mapMutations([
      'newInterval'
    ]),
    ...mapActions([
      'getSongInfo',
      'playPause',
      'pause',
      'setToggleModal'
    ])
  },
  computed: {
    ...mapState([
      'isPlaying',
      'expandedPlayer',
      'refreshInterval',
      'songInfo'
    ])
  },
  created () {
    this.getSongInfo()
    this.newInterval(setInterval(this.getSongInfo, this.refreshInterval))
    window.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        this.playPause()
      }
    })
  }
}
</script>

<style scoped>
.player {
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  grid-template-rows: 1fr 6.5fr 1.5fr 2fr 1fr;
  grid-template-areas:"a a a a"
                      "d d d d"
                      "e e e f"
                      "g g h i"
                      "j j j j";
}
.player1 {
  position: fixed;
  display: grid;
  width: 100vw;
  max-height: 181px;
  grid-template-columns: 1.5fr 3.5fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-template-areas:"a a a"
                      "d e h"
                      "g f i"
                      "j j j";
}
@media screen and (min-width: 768px) {
  .player {
    max-height: 640px;
  }
  .player1 {
    max-width: 360px;
  }
}
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .more-info {
    margin-top: 5px;
    margin-left: 0;
    margin-right: 0;
  }
}
.top-bar {
  grid-area: a;
}
.current-album-art {
  grid-area: d;
}
.current-meta {
  grid-area: e;
}
.feedback {
  grid-area: f;
}
.timer {
  grid-area: g;
}
.play-container {
  grid-area: h;
  margin: 0 auto;
}
.more-info {
  grid-area: i;
  margin: 0 auto;
}
.volume-slider {
  grid-area: j;
}
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
.material-icons.md-84 { font-size: 84px; }
.material-icons.md-96 { font-size: 96px; }
.material-icons { cursor: pointer; }
</style>
