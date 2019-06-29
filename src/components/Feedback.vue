<template>
    <div class="feedback" :class="[expandedPlayer ? 'expanded-feedback' : 'minimized-feedback']">
      <i class="material-icons" title="Thumbs Down" @click="add({ song: song, approval: false })" :class="[approval === false ? 'active' : '']">thumb_down_alt</i>
      <i class="material-icons" title="Thumbs Up" @click="add({ song: song, approval: true })" :class="[approval === true ? 'active' : '']">thumb_up_alt</i>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Feedback',
  props: [
    'song'
  ],
  data () {
    return {
      approval: ''
    }
  },
  computed: {
    ...mapState([
      'expandedPlayer',
      'mySongs',
      'moreInfoModalDisplay'
    ])
  },
  methods: {
    ...mapMutations([
      'addToMySongs',
      'removeFromMySongs',
      'updateMySongsApproval'
    ]),
    setInitialApproval (song) {
      const alreadyInMySongs = this.mySongs.some(s => s.songid === song.songid)
      if (alreadyInMySongs) {
        const index = this.mySongs.findIndex(s => s.songid === song.songid)
        this.approval = this.mySongs[index].approval
      } else {
        this.approval = ''
      }
    },
    add (payload) {
      const prevApproval = this.approval
      if (prevApproval === payload.approval) {
        this.approval = ''
        this.removeFromMySongs(payload)
      } else {
        const alreadyInMySongs = this.mySongs.some(s => s.songid === payload.song.songid)
        this.approval = payload.approval
        if (!alreadyInMySongs) {
          this.addToMySongs(payload)
        } else {
          this.updateMySongsApproval(payload)
        }
      }
    }
  },
  mounted () {
    this.setInitialApproval(this.song)
  },
  watch: {
    song () {
      this.setInitialApproval(this.song)
    },
    moreInfoModalDisplay () {
      this.setInitialApproval(this.song)
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
/* .feedback i:hover {
    transform: scale(1.2);
} */
.active {
    color: #2F4F4F;
}
</style>
