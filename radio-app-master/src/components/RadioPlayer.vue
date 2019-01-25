<template>
  <player />
</template>

<script>
import Player from './Player.vue'
import {
  mapState,
  mapMutations,
  mapActions } from 'vuex'

export default {
  components: {
    Player
  },
  methods: {
    ...mapActions([
      'getSongInfo'
    ]),
    ...mapMutations([
      'newInterval'
    ])
  },
  created () {
    this.getSongInfo()
    this.newInterval(setInterval(this.getSongInfo, this.refreshInterval))
  },
  computed: {
    ...mapState([
      'refreshInterval'
    ]),
    history: function () {
      return this.$store.state.history
    }
  }
}
</script>

<style>

</style>
