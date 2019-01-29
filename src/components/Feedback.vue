<template>
    <div class="feedback" :class="[expandedPlayer ? 'expanded-feedback' : 'minimized-feedback']">
      <i class="material-icons" title="Thumbs Down" @click="thumbsDown" :class="[approval === 'thumbsDown' ? 'active' : '']">thumb_down_alt</i>
      <i class="material-icons" title="Thumbs Up" @click="thumbsUp" :class="[approval === 'thumbsUp' ? 'active' : '']">thumb_up_alt</i>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Feedback',
  data () {
    return {
      approval: ''
    }
  },
  computed: {
    ...mapState([
      'expandedPlayer'
    ])
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
.expanded-feedback {
    padding-left: 10px;
    padding-right: 10px;
}
.minimized-feedback {
    padding-left: 35px;
    padding-right: 35px;
}
.feedback {
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
