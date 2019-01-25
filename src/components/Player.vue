<template>
  <div id="player">
    <div class="arrow-icon">
      <i class="material-icons md-36">expand_more</i>
    </div>
    <div class="title-bar"><span>Radiomv.org</span></div>
    <div class="nav-arrows">
      <i class="material-icons md-36">navigate_before</i>
      <i class="material-icons md-36">navigate_next</i>
    </div>
    <div class="current-album-art">
      <!-- <img src="https://via.placeholder.com/300" alt="random picture"> -->
        <a href="#" target="_blank">
            <img :src="itemImg(songInfo)" onerror="this.src='https://radiomv.org/samHTMweb/customMissing.jpg'" :alt="songInfo.title" />
        </a>
    </div>
    <div class="current-meta">
      <span class="title">{{ songInfo.title }}</span>
      <span class="artist">{{ songInfo.artist }}</span>
      <span class="album">{{ songInfo.album }}</span>
    </div>
    <div class="feedback">
      <i class="material-icons md-36">thumb_down_alt</i>
      <i class="material-icons md-36">thumb_up_alt</i>
    </div>
    <div class="timer">
        <timer />
    </div>
    <div class="play-container" @click="playPause" @keyup.space="playPause">
      <i class="material-icons md-96" v-if="!isPlaying">play_circle_outline</i>
      <i class="material-icons md-96" v-else>pause_circle_outline</i>
        <audio id="audio" :src="currentStream">
        Your browser does not support the audio element.
        </audio>
    </div>
    <div class="more-info">
      <i class="material-icons md-84">more_horiz</i>
    </div>
    <div class="volume-slider">
      <volume />
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue'
import Volume from './Volume.vue'
import {
  mapState,
  mapActions,
  mapMutations } from 'vuex'

export default {
  name: 'Player',
  components: {
    Timer,
    Volume
  },
  data () {
    return {
      currentStream: 'http://136.0.16.57:8000/.stream'
    }
  },
  methods: {
    ...mapMutations([
      'historyToggle'
    ]),
    ...mapActions([
      'playPause',
      'pause'
    ]),
    itemImg (item) {
      const url = 'https://radiomv.org/samHTMweb/'
      if (item.picture) {
        return url + item.picture
      } else {
        return url + 'customMissing.jpg'
      }
    }
  },
  computed: {
    ...mapState([
      'songInfo',
      'isPlaying'
    ])
  }
}
</script>

<style scoped>
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
.material-icons.md-84 { font-size: 84px; }
.material-icons.md-96 { font-size: 96px; }
.material-icons { cursor: pointer; }
#player {
  background: url(../assets/background.png) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #FFF;
  display: grid;
  height: 640px;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  grid-template-rows: 1fr 7fr 1fr 2fr 1fr;
  grid-template-areas:"a b b c"
                      "d d d d"
                      "e e e f"
                      "g g h i"
                      "j j j j";
}
#player1 {
  background: url(../assets/background.png) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #FFF;
  display: grid;
  height: 640px;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 1fr 8fr 2fr 1fr;
  grid-template-areas:"a b c"
                      "d e h"
                      "d f i"
                      "j j j";
}
.arrow-icon {
  grid-area: a;
  padding: 2px;
}
.title-bar {
  padding-top: 8px;
  grid-area: b;
  font-weight: 250;
  font-size: 18px;
}
.nav-arrows {
  grid-area: c;
  padding-top: 2px;
  margin-left:auto;
  margin-right:0;
}
.current-album-art {
  grid-area: d;
  padding-top: 20px;
}
.current-album-art img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  max-width: 300px;
  border: 2px solid white;
  border-radius: 15px;
}
.current-meta {
  grid-area: e;
  padding-left: 15px;
}
.current-meta .title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 300;
  font-size: 18px;
  display: block;
}
.current-meta .artist {
  font-weight: 100px;
  font-size: 14px;
  display: block;
}
.feedback {
  grid-area: f;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
}
.timer {
  grid-area: g;
  padding-top: 5px;
}
.play-container {
  grid-area: h;
  margin: 0 auto;
}
.more-info {
  grid-area: i;
  margin-left: auto;
  margin-right: auto;
}
.volume-slider {
  grid-area: j;
  padding-left: 15px;
  padding-right: 15px;
}
@media screen and (min-width: 768px) {
    #player {
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    width: 360px;
    height: 640px;
  }
}
</style>
