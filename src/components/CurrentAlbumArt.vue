<template>
    <div class="current-album-art" :class="[expandedPlayer ? 'expanded' : 'minimized']">
        <img :src="itemImg(songInfo)" @click="setToggleModal(songInfo)" onerror="this.src='https://cascadechapel.com/samHTMweb/customMissing.jpg'" :alt="songInfo.title" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'expandedPlayer',
      'songInfo',
      'loading'
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
      } else if (this.loading) {
        // return url + 'loading.gif'
        return url + 'graceway.png'
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
  /* height: 300px;
  max-width: 300px; */
  height: calc(100vw - 40px);
  max-width: calc(100vw - 40px);
}
.expanded {
  padding-top: 10px;
}
.minimized img {
  height: 60px;
  max-width: 60px;
}
@media only screen and (min-width: 768px) {
  .expanded img {
    height: 320px;
    max-width: 320px;
  }
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
