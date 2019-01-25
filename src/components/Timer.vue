<template>
    <div class="timer"><span>{{ time || "00:00" }}</span></div>
</template>

<script>
export default {
  name: 'Timer',
  computed: {
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
/* .timer {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
.timer span {
  font-size: 66px;
  transform: scale(.7, 1);
  display: inline-block;
  margin-left: -10px;
}
</style>
