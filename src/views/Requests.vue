<template>
  <div class="request">
    <div class="request-header">
      <div class="divider"><hr></div>
      <input class="request-input" type="text" v-model="search" @keyup="getSongs" v-focus placeholder="Search music...">
      <div class="divider"><hr></div>
      <div class="request-body">
        <simplebar id="request-container" data-simplebar-auto-hide="true">
          <div class="request-item" v-for="(song, i) in searchResults" :key="i">
            <div class="request-album">
              <img :src="itemImg(song)" @click="setToggleModal(song)" onerror="this.src='https://cascadechapel.com/samHTMweb/customMissing.jpg'" alt="song.title" class="history-img">
            </div>
            <div class="request-meta">
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
import { mapActions } from 'vuex'
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
import axios from 'axios'

// @ is an alias to /src
// import RadioPlayer from '@/components/RadioPlayer.vue'

export default {
  name: 'requests',
  components: {
    simplebar
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data () {
    return {
      search: '',
      api1: 'https://api.mlab.com/api/1/databases/songlist/collections/songs?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22combine%22:{%20$regex:%20%27(?i).*',
      api2: '.*%27%20}}',
      searchResults: ''
    }
  },
  methods: {
    ...mapActions([
      'setToggleModal'
    ]),
    getSongs () {
      if (this.search && this.search.length >= 3) {
        axios
          .get(this.api1 + this.search + this.api2)
          .then(res => res.data)
          .then(payload => {
            this.searchResults = payload
          })
      }
    },
    itemImg (item) {
      const url = 'https://cascadechapel.com/samHTMweb/'
      if (item.picture) {
        return url + item.picture
      } else {
        return url + 'customMissing.jpg'
      }
    }
  }
}
</script>

<style>
@supports not (-ms-ime-align: auto) {
   /* non-Microsoft Edge */
  .request-header {
    width:inherit;
  }
}
.request {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.request-header {
  position: fixed;
}
.request-title {
  font-weight: 500;
  font-size: 32px;
}
.request-input {
    border: none;
    background: transparent;
    font-size: 24px;
    color: white;
    padding-left: 15px;
}
.request-input:focus {
  outline: none;
}
.request hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.request-body {
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
.request-body a {
  text-decoration: none;
}
.request-item {
  height: 50px;
  width: calc(100vw - 20px)
}
.request-item:first-child:hover {
  transform: scale(1.25) translate(30px,5px);
}
.request-item:hover {
  transform: scale(1.25) translate(30px,0px);
}
.request-item hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.request-item span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.request-img {
  max-height: 42px;
  max-width: 42px;
  border: 1px solid white;
  border-radius: 10px;
}
.request-album {
  float: left;
  padding-right: 10px;
  width: 50px;
  text-align: center;
}
.request-meta span.song-name {
  font-family: "Open Sans", sans-serif;
  font-weight: 250;
  font-size: 16px;
  color: #fff;
  display: block; }
.request-meta span.artist {
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  font-size: 12px;
  color: #fff;
  display: block;
}
@media screen and (min-width: 768px) {
  .request-body {
    max-height: 515px;
    width: 480px;
  }
  .request-header {
    width: 480px;
  }
  .request-item {
    width: 460px;
  }
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .request-header {
    width: 320px;
  }
  .request-body {
    width: 290px;
  }
} */
</style>
