/* eslint-disable vue/return-in-computed-property */
/* eslint-disable vue/return-in-computed-property */
<template>
    <transition-group name="fade">
      <div class="more-info-modal" v-if="moreInfoModalDisplay" key="1">
        <div class="modal-inner">
          <span class="more-info-header">{{ modalObject.title }}</span>
          <div class="divider"><hr></div>
          <div class="modal-body">
            <span class="more-info-artist"><i class="material-icons">whatshot</i> Artist: {{ modalObject.artist }}</span>
            <span class="more-info-album"><i class="material-icons">album</i> Album: {{ modalObject.album }}</span>
            <span class="more-info-duration"><i class="material-icons">av_timer</i>Duration: {{ modalObject.minsec }}</span>
            <span class="more-info-buycd" v-if="modalObject.buycd"><a :href="modalObject.buycd" target="_blank"><i class="material-icons">exit_to_app</i>Buy CD</a></span>
            <a @click.stop.prevent="openWindow(requestSong)"><span class="more-info-duration"><i class="material-icons">audiotrack</i>Request Song</span></a>
          </div>
        </div>
      </div>
      <div class="modal-overlay" v-show="moreInfoModalDisplay" @click="toggleMoreInfoModal" key="2"></div>
    </transition-group>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'More-Info-Modal',
  data () {
    return {
      requestUrl: 'http://request.audiorealm.com/req/req.html?songID=',
      portHost: '&samport=1221&samhost=73.254.166.70'
    }
  },
  computed: {
    ...mapState([
      'moreInfoModalDisplay',
      'modalObject'
    ]),
    // eslint-disable-next-line vue/return-in-computed-property
    requestSong () {
      if (this.modalObject.songid) {
        return this.requestUrl + this.modalObject.songid + this.portHost
      }
    }
  },
  methods: {
    ...mapMutations([
      'toggleMoreInfoModal'
    ]),
    openWindow (link) {
      window.open(link, 'Request Song', 'width=300,height=300')
    }
  }
}
</script>

<style>
.modal-inner hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(105, 105, 105, 0), rgba(105, 105, 105, 0.75), rgba(105, 105, 105, 0));
}
.modal-inner {
  width: 100%;
}
.more-info-header {
  font-weight: 500;
  font-size: 32px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
.more-info-modal {
  position: absolute;
  top: 50%;
  margin-top: -150px;
  min-height: 300px;
  width: 100vw;
  z-index: 1010;
  background: white;
  color: #696969;
  text-align: center;
  padding-top: 5px;
  border-radius: 10px 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
.modal-body {
  text-align: left;
  padding-left: 15px;
    padding-top: 10px;
}
.modal-body a {
  text-decoration: none;
  color: inherit;
}
.modal-body span {
  display: block;
}
.modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
@media screen and (min-width: 768px) {
  .more-info-modal {
    width: 360px;
  }
}
</style>
