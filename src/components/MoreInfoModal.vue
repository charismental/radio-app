/* eslint-disable vue/return-in-computed-property */
/* eslint-disable vue/return-in-computed-property */
<template>
    <transition-group name="fade">
      <div class="more-info-modal" v-if="moreInfoModalDisplay" key="1">
        <img :src="`https://radiomv.org/samHTMweb/${modalObject.picture}`" alt="">
        <div class="modal-inner">
          <span class="more-info-header">{{ modalObject.title }}</span>
          <div class="divider"><hr></div>
          <div class="modal-body">
            <span class="more-info-artist"><i class="material-icons">whatshot</i> Artist: {{ modalObject.artist }}</span>
            <span class="more-info-album"><i class="material-icons">album</i> Album: {{ modalObject.album }}</span>
            <span class="more-info-duration"><i class="material-icons">av_timer</i>Duration: {{ modalObject.minsec }}</span>
            <span class="more-info-buycd" v-if="modalObject.buycd"><a :href="modalObject.buycd" target="_blank"><i class="material-icons">exit_to_app</i>Buy CD</a></span>
            <div class="request-span" v-show="modalObject.songid">
              <a @click="ajaxSongRequest">
                <span class="more-info-request">
                  <i class="material-icons">audiotrack</i>
                  <span v-if="!requesting">Click to request this song</span>
                  <span class="loading" v-else>Requesting</span>
                </span>
              </a>
            </div>
            <!-- <div class="modal-feedback"><feedback /></div> -->
            <div class="request-response" v-if="requestHeader">
              <h1 class="request-response-header" :class="[requestHeader === 'Request Successful' ? 'request-success' : '']">{{ requestHeader }}</h1>
              <h3>{{ requestBody }}</h3>
            </div>
            <div class="modal-close"><i class="material-icons" @click="closeModal">clear</i></div>
          </div>
        </div>
      </div>
      <div class="modal-overlay" v-show="moreInfoModalDisplay" @click="closeModal" key="2"></div>
    </transition-group>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import Feedback from './Feedback.vue'

export default {
  name: 'More-Info-Modal',
  components: {
    Feedback
  },
  data () {
    return {
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
      requestUrl: 'http://request.audiorealm.com/req/req.html?songID=',
      portHost: '&samport=1221&samhost=73.254.166.70',
      requestHeader: '',
      requestBody: '',
      requesting: false
    }
  },
  computed: {
    ...mapState([
      'moreInfoModalDisplay',
      'modalObject'
    ])
  },
  watch: {
    requestHeader: function () {
      if (this.requestHeader === 'Request Successful') {
        this.updateRequestSongs(this.modalObject)
      }
    }
  },
  methods: {
    ...mapMutations([
      'modalClose'
    ]),
    ...mapActions([
      'updateRequestSongs'
    ]),
    closeModal () {
      this.requestHeader = ''
      this.requestBody = ''
      this.modalClose()
    },
    ajaxSongRequest () {
      this.requesting = true
      const parser = new DOMParser()
      axios
        .get(`${this.corsProxy}${this.requestUrl}${this.modalObject.songid}${this.portHost}`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(res => {
          const doc = parser.parseFromString(res.data, 'text/html')
          const responseElement = doc.getElementById('content')
          this.requestHeader = responseElement.children[0].innerHTML
          this.requestBody = responseElement.children[1].innerHTML.replace('<br>', '')
          this.requesting = false
          setTimeout(() => { this.closeModal() }, 3300)
        })
    }
  }
}
</script>

<style>
.modal-feedback {
  width: 50%;
  margin: 0 auto;
}
.request-response {
  text-align: center;
}
.request-response-header {
  color: red;
}
.request-success {
  color: green;
}
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
.more-info-request{
  color: darkviolet;
}
.more-info-request span {
  cursor: pointer;
  font-size: 20px;
  display: inline-block !important;
}
.modal-close {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.more-info-request:hover {
  font-weight: 1000;
}
.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4,end) 900ms infinite;
  animation: ellipsis steps(4,end) 900ms infinite;
  content: "\2026";
  width: 0px;
}
@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}
@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;
  }
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
  overflow: hidden;
  top: 50%;
  margin-top: -150px;
  min-height: 300px;
  width: 100vw;
  z-index: 1010;
  background: white;
  color: black;
  text-align: center;
  padding-top: 5px;
  border-radius: 10px 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
.more-info-modal img {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 150%;
  max-height: 150vh;
  opacity: 0.2;
}

.modal-body {
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
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
