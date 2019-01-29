<template>
    <div class="current-album-art" :class="[expandedPlayer ? 'expanded' : 'minimized']">
      <a href="#" target="_blank">
          <img :src="itemImg(song)" onerror="this.src='https://radiomv.org/samHTMweb/customMissing.jpg'" :alt="song.title" />
      </a>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'expandedPlayer'
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
.minimized img {
  height: 60px;
  max-width: 60px;
}
</style>
