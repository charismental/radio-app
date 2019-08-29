import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bible: [
      {
        name: 'Genesis',
        index: 0,
        chapters: [
          {
            number: 1,
            path: '01_Genesis_01'
          },
          {
            number: 2,
            path: '01_Genesis_02'
          },
          {
            number: 3,
            path: '01_Genesis_03'
          },
          {
            number: 4,
            path: '01_Genesis_04'
          },
          {
            number: 5,
            path: '01_Genesis_05'
          },
          {
            number: 6,
            path: '01_Genesis_06'
          },
          {
            number: 7,
            path: '01_Genesis_07'
          },
          {
            number: 8,
            path: '01_Genesis_08'
          },
          {
            number: 9,
            path: '01_Genesis_09'
          },
          {
            number: 10,
            path: '01_Genesis_10'
          },
          {
            number: 11,
            path: '01_Genesis_11'
          },
          {
            number: 12,
            path: '01_Genesis_12'
          },
          {
            number: 13,
            path: '01_Genesis_13'
          },
          {
            number: 14,
            path: '01_Genesis_14'
          },
          {
            number: 15,
            path: '01_Genesis_15'
          }
        ]
      },
      {
        name: 'Exodus',
        index: 1,
        chapters: [
          {
            number: 1,
            path: '02_Exodus_01'
          }
        ]
      },
      {
        name: 'Leviticus',
        index: 2,
        chapters: [
          {
            number: 1,
            path: '03_Leviticus_01'
          }
        ]
      },
      {
        name: 'Numbers',
        index: 3,
        chapters: [
          {
            number: 1,
            path: '04_Numbers_01'
          }
        ]
      },
      {
        name: 'Deuteronomy',
        index: 4,
        chapters: [
          {
            number: 1,
            path: '05_Deuteronomy_01'
          }
        ]
      }
    ],
    bookChapter: '01_Genesis_01',
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
    audioBible: false,
    menuToggle: false,
    history: false,
    isPlaying: false,
    loading: true,
    moreInfoModalDisplay: false,
    expandedPlayer: true
  },
  mutations: {
    switchToBible (state) {
      state.audioBible = true
    },
    changeBookChapter (state, track) {
      state.bookChapter = track
    },
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
    pauseBibleSwitch ({ state, dispatch, commit }, track) {
      if (track && state.bookChapter === track) {
        return
      } else if (track) {
        dispatch('pause')
        commit('changeBookChapter', track)
      }
      if (!state.audioBible) {
        commit('switchToBible')
      }
      setTimeout(() => dispatch('playPause'), 200)
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
    }
  },
  getters: {
    currentStream: state => {
      return state.audioBible ? `http://radiomv.org/bible/${state.bookChapter}.mp3` : `http://136.0.16.57:${state.streamPort}/.stream`
    },
    favoriteSongs: state => {
      // doesn't work with triple equals...
      // eslint-disable-next-line eqeqeq
      return state.mySongs.filter(s => s.approval == true)
    }
  }
})
