<template>
    <div class="feedback">
      <i class="material-icons" title="Thumbs Down" @click="thumbsDown" :class="[approval === 'thumbsDown' ? 'active' : '']">thumb_down_alt</i>
      <i class="material-icons" title="Thumbs Up" @click="thumbsUp" :class="[approval === 'thumbsUp' ? 'active' : '']">thumb_up_alt</i>
    </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      approval: ''
    }
  },
  methods: {
    thumbsUp () {
      if (this.approval === 'thumbsUp') {
        this.approval = ''
      } else {
        this.approval = 'thumbsUp'
      }
    },
    thumbsDown () {
      if (this.approval === 'thumbsDown') {
        this.approval = ''
      } else {
        this.approval = 'thumbsDown'
      }
    }
  }
}
</script>

<style>
.feedback {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
}
.feedback i {
    font-size: 36px;
    cursor: pointer;
}
.feedback i:hover {
    transform: scale(1.2);
}
.active {
    color: #2F4F4F;
}
</style>
