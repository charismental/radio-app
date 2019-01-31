<template>
    <div class="current-meta" :class="[expandedPlayer ? 'expanded-meta' : 'minimized-meta']">
      <div class="marquee-container">
        <span class="title" :class="[marqueeTrigger(songInfo.title, 24) ? 'marquee' : '']">{{ songInfo.title }}</span>
      </div>
      <div class="marquee-container">
        <span class="artist" :class="[marqueeTrigger(songInfo.artist, 36) ? 'marquee' : '']">{{ songInfo.artist }}</span>
      </div>
      <div class="marquee-container">
        <span class="album" :class="[marqueeTrigger(songInfo.album, 36) ? 'marquee' : '']">{{ songInfo.album }}</span>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Current-Meta',
  computed: {
    ...mapState([
      'expandedPlayer',
      'songInfo'
    ])
  },
  methods: {
    marqueeTrigger (el, val) {
      return !!(el && el.length > val)
    }
  }
}
</script>

<style>
.minimized-meta {
  padding-top: 5px;
  padding-left: 0;
  width: 210px;
}
.expanded-meta {
  padding-left: 15px;
  padding-top: 10px;
}
.current-meta span {
  /* white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
  display: block;
}
.title {
  font-weight: 300;
  font-size: 18px;
}
.artist {
  font-weight: 100;
  font-size: 14px;
}
.album {
  font-weight: 100;
  font-size: 14px;
}
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .minimized-meta {
    width: 187px;
  }
}
@keyframes marquee {
  0% { transform: translateX(100%) }
  100% { transform: translateX(-130%) }
}
@-webkit-keyframes marquee {
  0% { transform: translateX(100%) }
  100% { transform: translateX(-130%) }
}
.marquee-container {
  overflow: hidden;
}
.marquee {
  white-space: nowrap;
  animation: marquee 8s linear infinite;
  -webkit-animation: marquee 8s linear infinite;
}
.marquee:hover {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
</style>
