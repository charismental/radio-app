<template>
    <div class="volume-slider">
        <input type="range" id="volume-slider-input" name="volume-slider" min="25" max="100" step=".75" v-model="volume">
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Volume',
  computed: {
    ...mapState([
      'volumeAdjust'
    ]),
    volume: {
      get () {
        return this.$store.state.volume
      },
      set (val) {
        this.$store.commit('updateVolume', val)
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    audio.volume = this.volume / 100
  },
  watch: {
    volume () {
      // eslint-disable-next-line
        audio.volume = Math.floor(Math.exp(this.volume/14.4763890095)) / 1000
      if (this.volume <= 25) {
        // eslint-disable-next-line
        audio.volume = 0
      }
    }
  }
}
</script>

<style>
#volume-slider-input {
    width: 100%;
    cursor: pointer;
}
.volume-slider {
    padding-left: 15px;
    padding-right: 15px;
}
</style>
