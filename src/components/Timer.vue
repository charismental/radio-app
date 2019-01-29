<template>
  <div class="timer">
    <div :class="[expandedPlayer ? 'expanded-timer' : 'minimized-timer']"><span>{{ time || "00:00" }}</span></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Timer',
  computed: {
    ...mapState([
      'expandedPlayer'
    ]),
    currentTime: function () {
      return this.$store.state.currentTime
    },
    time: function () {
      return this.minutes + ':' + this.seconds
    },
    minutes: function () {
      var min = Math.floor(this.currentTime / 60)
      return min >= 10 ? min : '0' + min
    },
    seconds: function () {
      var sec = this.currentTime - (this.minutes * 60)
      return sec >= 10 ? sec : '0' + sec
    }
  }
}
</script>

<style>
.expanded-timer span {
  font-size: 66px;
  transform: scale(.7, 1);
  display: inline-block;
  margin-left: -10px;
  margin-top: 5px;
}
.minimized-timer span {
  font-size: 36px;
  transform: scale(.7, 1);
  display: inline-block;
  margin-left: 4px;
}
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .minimized-timer span {
    margin-left: -6px;
  }
  .expanded-timer span {
    margin-top: 15px;
    font-size: 58px;
  }
}
</style>
