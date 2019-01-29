<template>
    <div class="top-bar">
        <div class="arrow-icon" @click="toggleExpandedPlayer">
          <i class="material-icons md-36" v-if="!expandedPlayer">expand_more</i>
          <i class="material-icons md-36" v-else>expand_less</i>
        </div>
        <div class="title-bar"><span>Radiomv.org</span></div>
        <div class="nav-arrows">
          <router-link to="/"><i class="material-icons md-36">navigate_before</i></router-link>
          <router-link to="/about"><i class="material-icons md-36">navigate_next</i></router-link>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapState([
      'expandedPlayer'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleExpandedPlayer'
    ])
  }
}
</script>

<style>
.material-icons.md-36 { font-size: 36px; }
.top-bar {
    display: grid;
    grid-auto-columns: 1fr 3fr 2fr;
    grid-template-areas: "aa bb cc"
}
.arrow-icon {
  grid-area: aa;
  padding: 2px;
  cursor: pointer;
}
.title-bar {
  padding-top: 8px;
  grid-area: bb;
  font-weight: 250;
  font-size: 18px;
}
.nav-arrows {
  grid-area: cc;
  padding-top: 2px;
  margin-left:auto;
  margin-right:0;
  cursor: pointer;
}
.nav-arrows a {
  color: white;
}
</style>
