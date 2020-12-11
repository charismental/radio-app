import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    streamPort: 8000,
    // fetch intervals
    refreshInterval: 10000,
    interval: '',
    // timer
    currentTime: 0,
    timerInterval: null,
    timerRunning: false,
    // meta objects
    requestSongs: [],
    mySongs: [],
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
    menuToggle: false,
    history: false,
    isPlaying: false,
    loading: true,
    moreInfoModalDisplay: false,
    expandedPlayer: true
  },
  mutations: {
    initializeStore (state) {
      if (localStorage.getItem('mySongs')) {
        const stored = JSON.parse(localStorage.getItem('mySongs'))
        state.mySongs = [...stored]
      }
    },
    addToMySongs (state, { song, approval }) {
      const newSong = song
      song.approval = approval
      state.mySongs.push(newSong)
    },
    updateMySongsApproval (state, payload) {
      const songIndex = state.mySongs.findIndex(s => s.songid === payload.song.songid)
      state.mySongs[songIndex].approval = payload.approval
    },
    removeFromMySongs (state, payload) {
      const songIndex = state.mySongs.findIndex(s => s.songid === payload.song.songid)
      state.mySongs.splice(songIndex, 1)
    },
    setStreamPort (state, port) {
      state.streamPort = port
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
    pauseChangeQuality ({ dispatch, commit }, port) {
      dispatch('pause')
      commit('setStreamPort', port)
      setTimeout(() => dispatch('playPause'), 200)
    },
    getSongInfo ({ state, commit }) {
      const temp = state.songInfo
      axios
        .get('https://cascadechapel.com/samHTMweb/info.json')
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
    }
  },
  getters: {
    currentStream: state => {
      return `http://136.0.16.57:${state.streamPort}/.stream`
      // return 'https://ssl.rcast.net/stream/64776'
    },
    favoriteSongs: state => {
      // doesn't work with triple equals...
      // eslint-disable-next-line eqeqeq
      return state.mySongs.filter(s => s.approval == true)
    }
  }
})
