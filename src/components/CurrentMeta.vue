<template>
    <div class="current-meta" :class="[expandedPlayer ? 'expanded-meta' : 'minimized-meta']">
      <span class="title">{{ songInfo.title }}</span>
      <span class="artist">{{ songInfo.artist }}</span>
      <span class="album">{{ songInfo.album }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Current-Meta',
  computed: {
    ...mapState([
      'expandedPlayer',
      'songInfo'
    ])
  }
}
</script>

<style>
.minimized-meta {
  padding-top: 5px;
  padding-left: 0;
  width: 210px;
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
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .minimized-meta {
    width: 187px;
  }
}
</style>
