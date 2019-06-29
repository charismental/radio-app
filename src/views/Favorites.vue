<template>
  <div class="favorites">
    <div class="favorites-header">
      <div class="divider"><hr></div>
      <span class="favorites-title">My Favorites</span>
      <div class="divider"><hr></div>
      <div class="favorites-body">
        <simplebar id="favorites-container" data-simplebar-auto-hide="true">
          <div class="favorites-item" v-for="song in favoriteSongs" :key="song.songid">
            <div class="favorites-album">
              <img :src="itemImg(song)" @click="setToggleModal(song)" onerror="this.src='https://radiomv.org/samHTMweb/customMissing.jpg'" alt="song.title" class="favorites-img">
            </div>
            <div class="favorites-meta">
              <span @click="setToggleModal(song)" class="song-name">{{ song.title }}</span>
              <span @click="setToggleModal(song)" class="artist">{{ song.artist }}</span>
              <hr>
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
// @ is an alias to /src
// import RadioPlayer from '@/components/RadioPlayer.vue'

export default {
  name: 'favorites',
  components: {
    simplebar
  },
  computed: {
    ...mapState([
      'mySongs'
    ]),
    ...mapGetters([
      'favoriteSongs'
    ])
  },
  methods: {
    ...mapActions([
      'setToggleModal'
    ]),
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
@supports not (-ms-ime-align: auto) {
   /* non-Microsoft Edge */
  .favorites-header {
    width:inherit;
  }
}
.favorites {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.favorites-header {
  position: fixed;
}
.favorites-title {
  font-weight: 500;
  font-size: 32px;
}
.favorites hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.favorites-body {
  overflow: auto;
  /* 58.5vh */
  max-height: calc(100vh - 220px);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  cursor: pointer;
  width: inherit;
}
.favorites-body a {
  text-decoration: none;
}
.favorites-item {
  height: 50px;
  width: calc(100vw - 20px);
}
.favorites-item:first-child:hover {
  transform: scale(1.25) translate(30px,5px);
}
.favorites-item:hover {
  transform: scale(1.25) translate(30px,0px);
}
.favorites-item hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.favorites-item span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.favorites-img {
  max-height: 42px;
  max-width: 42px;
  border: 1px solid white;
  border-radius: 10px;
}
.favorites-album {
  float: left;
  padding-right: 10px;
  width: 50px;
  text-align: center;
}
.favorites-meta span.song-name {
  font-family: "Open Sans", sans-serif;
  font-weight: 250;
  font-size: 16px;
  color: #fff;
  display: block; }
.favorites-meta span.artist {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  display: block;
}
@media screen and (min-width: 768px) {
  .favorites-body {
    max-height: 415px;
    width: 360px;
  }
  .favorites-header {
    width: 360px;
  }
  .favorites-item {
    width: 340px;
  }
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .favorites-header {
    width: 320px;
  }
  .favorites-body {
    width: 305px;
  }
} */
</style>
