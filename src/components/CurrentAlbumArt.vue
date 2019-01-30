<template>
    <div class="current-album-art" :class="[expandedPlayer ? 'expanded' : 'minimized']">
      <a :href="songInfo.buycd" target="_blank">
          <img :src="itemImg(songInfo)" onerror="this.src='https://radiomv.org/samHTMweb/customMissing.jpg'" :alt="songInfo.title" />
      </a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'expandedPlayer',
      'songInfo',
      'loading'
    ])
  },
  methods: {
    itemImg (item) {
      const url = 'https://radiomv.org/samHTMweb/'
      if (item.picture) {
        return url + item.picture
      } else if (this.loading) {
        return url + 'loading.gif'
      } else {
        return url + 'customMissing.jpg'
      }
    }
  }
}
</script>

<style>
.current-album-art img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid white;
  border-radius: 15px;
}
.expanded img {
  height: 300px;
  max-width: 300px;
}
.expanded {
  padding-top: 10px;
}
.minimized img {
  height: 60px;
  max-width: 60px;
}
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .minimized img {
    height: 50px;
    max-width: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .expanded img {
    height: 280px;
    max-width: 280px;
  }
}
</style>
