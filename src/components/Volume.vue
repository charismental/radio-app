<template>
    <div>
        <input type="range" id="volume-slider-input" name="volume-slider" min="0" max="100" step="1" v-model="volume">
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
        audio.volume = this.volume / 100
    }
  }
}
</script>

<style>
#volume-slider-input {
    width: 100%;
}
.volume-slider {
    cursor: pointer;
}
</style>
