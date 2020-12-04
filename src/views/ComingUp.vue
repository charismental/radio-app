<template>
  <div class="queue">
    <div class="queue-header">
      <div class="divider"><hr></div>
      <span class="queue-title">Upcoming</span>
      <div class="divider"><hr></div>
      <div class="queue-body">
        <simplebar id="queue-container" data-simplebar-auto-hide="true">
          <div class="queue-item" v-for="(song, i) in songQueue.slice(0,-1)" :key="i">
            <div class="queue-album">
              <img :src="itemImg(song)" @click="setToggleModal(song)" onerror="this.src='https://cascadechapel.com/samHTMweb/customMissing.jpg'" alt="song.title" class="queue-img">
            </div>
            <div class="queue-meta">
              <span @click="setToggleModal(song)" class="song-name">{{ song.title }}</span>
              <span @click="setToggleModal(song)" class="artist">{{ song.artist }}</span>
              <hr>
            </div>
          </div>
          <div class="requested-placeholder" v-if="requestSongs.length">
            <div class="queue-item" v-for="(song, i) in requestSongs" :key="i">
              <div class="queue-album">
                <img :src="itemImg(song)" @click="setToggleModal(song)" onerror="this.src='https://cascadechapel.com/samHTMweb/customMissing.jpg'" alt="song.title" class="queue-img">
              </div>
              <div class="queue-meta">
                <span @click="setToggleModal(song)" class="song-name">{{ song.title }}</span>
                <span @click="setToggleModal(song)" class="artist">{{ song.artist }}</span>
                <hr>
              </div>
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
// @ is an alias to /src
// import RadioPlayer from '@/components/RadioPlayer.vue'

export default {
  name: 'history',
  components: {
    simplebar
  },
  computed: {
    ...mapState([
      'songQueue',
      'requestSongs'
    ])
  },
  methods: {
    ...mapActions([
      'setToggleModal'
    ]),
    itemImg (item) {
      const url = 'https://cascadechapel.com/samHTMweb/'
      if (item.picture) {
        return url + item.picture
      } else {
        return url + 'customMissing.jpg'
      }
    },
    itemUrl (item) {
      if (item.buycd) {
        return item.buycd
      } else {
        return 'https://www.cascadechapel.com'
      }
    }
  }
}
</script>

<style>
@supports not (-ms-ime-align: auto) {
   /* non-Microsoft Edge */
  .queue-header {
    width:inherit;
  }
}
.queue {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.queue-header {
  position: fixed;
}
.queue-title {
  font-weight: 500;
  font-size: 32px;
}
.queue hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.queue-body {
  overflow: auto;
  max-height: calc(100vh - 220px);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: inherit;
}
.queue-body a {
  text-decoration: none;
}
.queue-item {
  height: 50px;
  width: calc(100vw - 20px)
}
.queue-item:first-child:hover {
  transform: scale(1.25) translate(30px,5px);
}
.queue-item:hover {
  transform: scale(1.25) translate(30px,0px);
}
.queue-item hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.queue-item span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.queue-img {
  max-height: 42px;
  max-width: 42px;
  border: 1px solid white;
  border-radius: 10px;
}
.queue-album {
  float: left;
  padding-right: 10px;
  width: 50px;
  text-align: center;
}
.queue-meta span.song-name {
  font-family: "Open Sans", sans-serif;
  font-weight: 250;
  font-size: 16px;
  color: #fff;
  display: block; }
.queue-meta span.artist {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  display: block;
}
@media screen and (min-width: 768px) {
  .queue-body {
    max-height: 515px;
    width: 480px;
  }
  .queue-header {
    width: 480px;
  }
  .queue-item {
    width: 460px;
  }
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .queue-header {
    width: 320px;
  }
  .queue-body {
    width: 290px;
  }
} */
</style>
