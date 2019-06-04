import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStream: 'http://136.0.16.57:8000/.stream',
    // volume
    previousVolume: '',
    volume: 90,
    volumeAdjust: false,
    // fetch intervals
    refreshInterval: 10000,
    interval: '',
    // timer
    currentTime: 0,
    timerInterval: null,
    timerRunning: false,
    // meta objects
    requestSongs: [],
    songInfo: '',
    songHistory: '',
    songQueue: '',
    modalObject: '',
    trailers: [
      'Curtis Dougherty',
      'David Pawson',
      'Derek Prince',
      'Ern Baxter',
      'Jamie Buckingham',
      'John Casteel',
      'Paul Washer',
      'Scourby'
    ],
    // toggles
    quality: 'Medium',
    approval: '',
    menuToggle: false,
    history: false,
    isPlaying: false,
    loading: true,
    moreInfoModalDisplay: false,
    expandedPlayer: true
  },
  mutations: {
    toggleQuality (state) {
      // if (state.currentStream === 'http://136.0.16.57:8000/.stream') {
      //   state.currentStream = 'http://136.0.16.57:8006/.stream'
      // } else {
      //   state.currentStream = 'http://136.0.16.57:8000/.stream'
      // }
      state.currentStream = 'http://136.0.16.57:8006/.stream'
      state.quality = 'High'
    },
    thumbsUp (state) {
      if (state.approval === true) {
        state.approval = ''
      } else {
        state.approval = true
      }
    },
    thumbsDown (state) {
      if (state.approval === false) {
        state.approval = ''
      } else {
        state.approval = false
      }
    },
    toggleMenu (state) {
      state.menuToggle = !state.menuToggle
    },
    menuDisable (state) {
      state.menuToggle = false
    },
    setModalObject (state, payload) {
      state.modalObject = payload
    },
    toggleExpandedPlayer (state) {
      state.expandedPlayer = !state.expandedPlayer
    },
    expandPlayerCloseMenu (state) {
      state.expandedPlayer = true
      state.menuToggle = false
    },
    minimizePlayer (state) {
      state.expandedPlayer = false
      state.menuToggle = false
    },
    toggleMoreInfoModal (state) {
      state.moreInfoModalDisplay = !state.moreInfoModalDisplay
    },
    modalClose (state) {
      state.moreInfoModalDisplay = false
    },
    volumeAdjustToggle (state) {
      state.volumeAdjust = !state.volumeAdjust
    },
    updateVolume (state, payload) {
      state.volume = payload
    },
    setPreviousVolume (state, payload) {
      state.previousVolume = payload
    },
    countupTimer (state) {
      if (state.timerRunning) {
        state.currentTime++
      }
    },
    setTimerRunning (state, payload) {
      state.timerRunning = payload
    },
    setTimerInterval (state, payload) {
      state.timerInterval = payload
    },
    setSongInfo (state, payload) {
      state.songInfo = payload.song_info
      state.songHistory = payload.song_history
      state.songQueue = payload.song_queue
      state.requestSongs = []
    },
    historyToggle (state) {
      state.history = !state.history
    },
    isPlaying (state, payload) {
      state.isPlaying = payload
    },
    newInterval (state, payload) {
      state.interval = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    pauseChangeQuality ({ dispatch, commit }) {
      commit('toggleQuality')
      dispatch('pause')
    },
    getSongInfo ({ state, commit }) {
      const temp = state.songInfo
      axios
        .get('https://radiomv.org/samHTMweb/info.json')
        .then(res => res.data)
        .then(payload => {
          if (!temp.title || temp.title !== payload.song_info.title) {
            commit('setSongInfo', payload)
            if (state.loading === true) {
              commit('setLoading', false)
            }
          }
        })
    },
    updateRequestSongs ({ state }, payload) {
      state.requestSongs.push(payload)
    },
    setToggleModal ({ commit }, payload) {
      commit('setModalObject', payload)
      commit('toggleMoreInfoModal')
    },
    playPause ({ commit, dispatch }) {
      // eslint-disable-next-line
        if (audio.paused) {
        // eslint-disable-next-line
            audio.play()
        commit('isPlaying', true)
        dispatch('timerRun')
      } else {
        dispatch('pause')
      }
    },
    pause ({ commit, dispatch }) {
      // eslint-disable-next-line
        audio.pause()
      commit('isPlaying', false)
      dispatch('timerPause')
    },
    timerRun ({ state, commit }) {
      commit('setTimerRunning', true)
      commit('setTimerInterval', setInterval(function () {
        if (state.timerRunning) {
          state.currentTime++
        }
      }, 1000))
    },
    timerPause ({ state, commit }) {
      commit('setTimerRunning', false)
      clearInterval(state.timerInterval)
    },
    muteToggle ({ state, commit }) {
      if (state.volume === 0) {
        commit('updateVolume', state.previousVolume)
      } else {
        commit('setPreviousVolume', state.volume)
        commit('updateVolume', 0)
      }
    }
  }
})
