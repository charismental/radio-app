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
  max-width: 200px;
}
.expanded-meta {
  padding-left: 15px;
  padding-top: 10px;
}
.current-meta span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}
.title {
  font-weight: 300;
  font-size: 18px;
}
.artist {
  font-weight: 100;
  font-size: 14px;
}
.album {
  font-weight: 100;
  font-size: 14px;
}
</style>
