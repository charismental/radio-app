<template>
    <div class="current-meta" :class="[expandedPlayer ? 'expanded-meta' : 'minimized-meta']">
      <span class="title">{{ song.title }}</span>
      <span class="artist">{{ song.artist }}</span>
      <span class="album">{{ song.album }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Current-Meta',
  props: [ 'song' ],
  computed: {
    ...mapState([
      'expandedPlayer'
    ])
  }
}
</script>

<style>
.minimized-meta {
  padding-top: 5px;
  padding-left: 0;
  max-width: 210px;
}
.expanded-meta {
  padding-left: 15px;
  padding-top: 10px;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 300;
  font-size: 18px;
  display: block;
}
.artist {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 100;
  font-size: 14px;
  display: block;
}
.album {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 100;
  font-size: 14px;
  display: block;
}
</style>
