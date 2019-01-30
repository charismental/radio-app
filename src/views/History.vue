<template>
  <div class="history">
    <div class="history-header">
      <div class="divider"><hr></div>
      <span class="history-title">Recent History</span>
      <div class="divider"><hr></div>
      <div class="history-body">
        <simplebar id="history-container" data-simplebar-auto-hide="true">
          <div class="history-item" v-for="(song, i) in songHistory.slice(0,29)" :key="i">
            <div class="history-album">
              <a :href="itemUrl(song)" target="_blank"><img :src="itemImg(song)" onerror="this.src='https://radiomv.org/samHTMweb/customMissing.jpg'" alt="song.title" class="history-img"></a>
            </div>
            <div class="history-meta">
              <a :href="itemUrl(song)" target="_blank">
                <span class="song-name">{{ song.title }}</span>
              </a>
              <span class="artist">{{ song.artist }}</span>
              <hr>
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      'songHistory'
    ])
  },
  methods: {
    itemImg (item) {
      const url = 'https://radiomv.org/samHTMweb/'
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
        return 'https://www.radiomv.org'
      }
    }
  }
}
</script>

<style>
.history {
  position: absolute;
  display: flex;
  text-align: center;
  top: 181px;
  width: 100vw;
}
.history-header {
  width: inherit;
  position: fixed;
}
.history-title {
  font-weight: 500;
  font-size: 32px;
}
.history hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.history-body {
  overflow: auto;
  /* 58.5vh */
  max-height: calc(100vh - 250px);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: inherit;
}
.history-body a {
  text-decoration: none;
}
.history-item {
  height: 50px;
  width: calc(100vw - 20px);
}
.history-item:first-child:hover {
  transform: scale(1.25) translate(30px,5px);
}
.history-item:hover {
  transform: scale(1.25) translate(30px,0px);
}
.history-item hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.history-item span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.history-img {
  max-height: 42px;
  max-width: 42px;
  border: 1px solid white;
  border-radius: 10px;
}
.history-album {
  float: left;
  padding-right: 10px;
  width: 50px;
  text-align: center;
}
.history-meta span.song-name {
  font-family: "Open Sans", sans-serif;
  font-weight: 250;
  font-size: 16px;
  color: #fff;
  display: block; }
.history-meta span.artist {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  display: block;
}
@media screen and (min-width: 768px) {
  .history-body {
    max-height: 375px;
    width: 360px;
  }
  .history-header {
    width: 360px;
  }
  .history-item {
    width: 340px;
  }
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .history-header {
    width: 320px;
  }
  .history-body {
    width: 305px;
  }
} */
</style>
