<template>
  <div class="feedback" :class="[expandedPlayer ? 'expanded-feedback' : 'minimized-feedback']">
    <i
      class="material-icons"
      title="Thumbs Down"
      @click="add({ song: song, approval: false })"
      :class="[approval === false ? 'active' : '']"
    >thumb_down_alt</i>
    <i
      class="material-icons"
      title="Thumbs Up"
      @click="add({ song: song, approval: true })"
      :class="[approval === true ? 'active' : '']"
    >thumb_up_alt</i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'Feedback',
  props: [
    'song'
  ],
  data () {
    return {
      approval: '',
      ratedSong: ''
    }
  },
  computed: {
    ...mapState([
      'expandedPlayer',
      'mySongs',
      'moreInfoModalDisplay'
    ]),
    api () {
      return `https://api.mlab.com/api/1/databases/songlist/collections/rated?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q={%22songid%22:%22${this.song.songid}%22}`
    },
    thumbup () {
      return `https://api.mlab.com/api/1/databases/songlist/collections/thumbsup?apiKey=MxT5bRs11urXAq91rBbbZdGRkVyxC0rB&q`
    }
  },
  methods: {
    setSong () {
      axios
        .get(this.api)
        .then(res => res.data[0])
        .then(data => {
          this.ratedSong = data
        })
    },
    thumbsUp () {
      axios
        const songId = this.ratedSong.songid
        .get(this.thumbup)
        .then(event => {
        if(event.songId === db.thumbsup.find({songId})) {
          (db.thumbsup.updateOne({songId: songId}, {$inc: {rating: 1}}))
        } else {
          (res => res.db.thumbsup.insertOne({sondId: songId}, {songId: 1}, {$set: {rating: 1}}, {upsert: true}))
        }})
        .catch(err => {console.log(err)})
    },
        
        // the line above is a working MongoDB shell script for updating 1 item
        // don't know whether should be another .then() block or .post() will suffice.
        // need to figure out how to limit fields added to thumbsup collection in DB
        // to prevent redundancy
        
 
    dislike () {
      if (this.ratedSong) {
        axios
          .put(this.api, {
            '_id': {
              '$oid': this.ratedSong._id.$oid
            },
            'title': this.ratedSong.title,
            'artist': this.ratedSong.artist,
            'album': this.ratedSong.album,
            'minsec': this.ratedSong.minsec,
            'combine': this.ratedSong.combine,
            'picture': this.ratedSong.picture,
            'buycd': this.ratedSong.buycd,
            'songid': this.ratedSong.songid,
            'likes': this.ratedSong.likes,
            'dislikes': this.ratedSong.dislikes + 1
          })
      }
    },
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
          if (payload.approval === false) {
            this.dislike()
          }
          this.addToMySongs(payload)
        } else {
          if (payload.approval === false) {
            this.dislike()
          }
          this.updateMySongsApproval(payload)
        }
      }
    }
  },
  mounted () {
    this.setInitialApproval(this.song)
    this.setSong()
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
  color: #2f4f4f;
}
</style>
