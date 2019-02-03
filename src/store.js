import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    songInfo: '',
    allSongs: [
      {
        'title': 'Draw Me Close',
        'artist': 'Andy Park',
        'album': 'Songs 4 Worship: Amazing Love [Disc 1]',
        'minsec': '4:39',
        'duration': '279536',
        'picture': 'az_170_Songs 4 Worship Amazing Love [Disc 1]_Andy Park.jpg',
        'buycd': '',
        'songid': '170'
      },
      {
        'title': 'Eternity',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:11',
        'duration': '251794',
        'picture': 'az_295_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '295'
      },
      {
        'title': 'Fire Of God',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:09',
        'duration': '249443',
        'picture': 'az_286_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '286'
      },
      {
        'title': 'I Want To Know You',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '5:37',
        'duration': '337842',
        'picture': 'az_289_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '289'
      },
      {
        'title': 'In The Secret (I Want To Know You)',
        'artist': 'Andy Park',
        'album': 'Draw Me Close: 25 Top Vineyard Worship Songs [Disc 2]',
        'minsec': '4:40',
        'duration': '280777',
        'picture': 'az_1209_Draw Me Close 25 Top Vineyard Worship Songs [Disc 2]_Andy Park.jpg',
        'buycd': '',
        'songid': '1209'
      },
      {
        'title': 'Jude Doxology',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:12',
        'duration': '252003',
        'picture': 'az_284_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '284'
      },
      {
        'title': 'Just Like You Promised',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:22',
        'duration': '262139',
        'picture': 'az_290_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '290'
      },
      {
        'title': 'Let Your Glory Fall',
        'artist': 'Andy Park',
        'album': 'Winds Of Worship 04 Live From Brighton, England',
        'minsec': '5:08',
        'duration': '308062',
        'picture': 'az_383_Winds Of Worship 04 Live From Brighton, England_Andy Park.jpg',
        'buycd': '',
        'songid': '383'
      },
      {
        'title': 'My Delight',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:05',
        'duration': '245211',
        'picture': 'az_292_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '292'
      },
      {
        'title': 'My Jesus I Love Thee',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:01',
        'duration': '241189',
        'picture': 'az_291_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '291'
      },
      {
        'title': 'My Redeemer Lives',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '7:19',
        'duration': '439092',
        'picture': 'az_294_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '294'
      },
      {
        'title': 'No Other Gods',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:18',
        'duration': '258116',
        'picture': 'az_285_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '285'
      },
      {
        'title': 'Oh Lord Have Mercy On Me',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '5:01',
        'duration': '301949',
        'picture': 'az_287_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '287'
      },
      {
        'title': 'Thank You For Being',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '2:40',
        'duration': '160522',
        'picture': 'az_288_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '288'
      },
      {
        'title': 'The River Is Here',
        'artist': 'Andy Park',
        'album': 'Draw Me Close: 25 Top Vineyard Worship Songs [Disc 2]',
        'minsec': '3:38',
        'duration': '218187',
        'picture': 'az_1207_Draw Me Close 25 Top Vineyard Worship Songs [Disc 2]_Andy Park.jpg',
        'buycd': '',
        'songid': '1207'
      },
      {
        'title': 'We Exalt Your Name',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '4:25',
        'duration': '265456',
        'picture': 'az_283_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '283'
      },
      {
        'title': 'You Are My King',
        'artist': 'Andy Park',
        'album': 'Eternity (Acoustic Worship #2)',
        'minsec': '5:58',
        'duration': '358060',
        'picture': 'az_293_Eternity (Acoustic Worship 2)_Andy Park.jpg',
        'buycd': '',
        'songid': '293'
      },
      {
        'title': 'How We Need The River',
        'artist': 'Terry MacAlmon',
        'album': 'The Sound Of Heaven [Live]',
        'minsec': '6:54',
        'duration': '414851',
        'picture': 'az_825_The Sound Of Heaven [Live]_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '825'
      },
      {
        'title': 'Hymn for the Martyrs',
        'artist': 'Terry Macalmon',
        'album': 'The Refreshing, Vol. 1',
        'minsec': '6:31',
        'duration': '391219',
        'picture': 'az_12689_The Refreshing, Vol 1_Terry MacAlmon.jpg',
        'buycd': 'https://www.amazon.com/Refreshing-Vol-1-Terry-MacAlmon/dp/B01699X21O?SubscriptionId=AKIAJ7HPQDOBIXXNVHTA&tag=spacial-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01699X21O',
        'songid': '12696'
      },
      {
        'title': 'I Came To Worship You',
        'artist': 'Terry MacAlmon',
        'album': 'I Came To Worship You [Live]',
        'minsec': '5:32',
        'duration': '332486',
        'picture': 'az_426_I Came To Worship You [Live]_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '426'
      },
      {
        'title': 'I Came to Worship You',
        'artist': 'Terry Macalmon',
        'album': 'The Refreshing, Vol. 2 : Symphony of Love',
        'minsec': '6:52',
        'duration': '412621',
        'picture': 'az_12705_The Refreshing, Vol 2, Symphony of Love_Terry MacAlmon.jpg',
        'buycd': 'https://www.amazon.com/Refreshing-Vol-Symphony-Love/dp/B01N42HRZG?SubscriptionId=AKIAJ7HPQDOBIXXNVHTA&tag=spacial-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01N42HRZG',
        'songid': '12701'
      },
      {
        'title': 'I Came To Worship You (Reprise)',
        'artist': 'Terry MacAlmon',
        'album': 'I Came To Worship You [Live]',
        'minsec': '3:54',
        'duration': '234606',
        'picture': 'az_856_I Came To Worship You [Live]_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '856'
      },
      {
        'title': 'I Exalt Thee',
        'artist': 'Terry MacAlmon',
        'album': "You're My Glory: Live Worship",
        'minsec': '6:36',
        'duration': '396860',
        'picture': "az_1171_You're My Glory Live Worship_Terry MacAlmon.jpg",
        'buycd': 'https://www.amazon.com/Youre-My-Glory-Live-Worship/dp/B0007X9U38?SubscriptionId=AKIAJ7HPQDOBIXXNVHTA&tag=spacial-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0007X9U38',
        'songid': '1174'
      },
      {
        'title': 'I Hear Him',
        'artist': 'Terry MacAlmon',
        'album': 'Visit Us [Live]',
        'minsec': '5:53',
        'duration': '353306',
        'picture': 'az_573_Visit Us [Live]_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '573'
      },
      {
        'title': 'I Just Want To Praise You',
        'artist': 'Terry MacAlmon',
        'album': 'For The Bride',
        'minsec': '4:05',
        'duration': '245577',
        'picture': 'az_685_For The Bride_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '685'
      },
      {
        'title': 'I Long to Be One',
        'artist': 'Terry Macalmon',
        'album': 'The Refreshing, Vol. 1',
        'minsec': '5:30',
        'duration': '330445',
        'picture': 'az_12689_The Refreshing, Vol 1_Terry MacAlmon.jpg',
        'buycd': 'https://www.amazon.com/Refreshing-Vol-1-Terry-MacAlmon/dp/B01699X21O?SubscriptionId=AKIAJ7HPQDOBIXXNVHTA&tag=spacial-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01699X21O',
        'songid': '12689'
      },
      {
        'title': 'I Love You',
        'artist': 'Terry MacAlmon',
        'album': 'I Came To Worship You [Live]',
        'minsec': '6:38',
        'duration': '398289',
        'picture': 'az_495_I Came To Worship You [Live]_Terry MacAlmon.jpg',
        'buycd': '',
        'songid': '495'
      },
      {
        'title': 'I Love Your Presence Lord',
        'artist': 'Terry MacAlmon',
        'album': 'Everlasting Love ',
        'minsec': '3:44',
        'duration': '224627',
        'picture': 'az_302_Everlasting Love_Terry MacAlmon.jpg',
        'buycd': 'https://www.amazon.com/Everlasting-Love-Terry-MacAlmon/dp/B00GYG0T2I?SubscriptionId=AKIAJ7HPQDOBIXXNVHTA&tag=spacial-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00GYG0T2I',
        'songid': '301'
      }
    ],
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
    // trailers: [
    //   { title: 'Curtis Dougherty' },
    //   { title: 'David Pawson' },
    //   { title: 'Derek Prince' },
    //   { title: 'Ern Baxter' },
    //   { title: 'Jamie Buckingham' },
    //   { title: 'John Casteel' },
    //   { title: 'Paul Washer' },
    //   { title: 'Scourby' }
    // ],
    // toggles
    history: false,
    isPlaying: false,
    loading: true,
    moreInfoModalDisplay: false,
    expandedPlayer: true
  },
  mutations: {
    setModalObject (state, payload) {
      state.modalObject = payload
    },
    toggleExpandedPlayer (state) {
      state.expandedPlayer = !state.expandedPlayer
    },
    minimizePlayer (state) {
      state.expandedPlayer = false
    },
    toggleMoreInfoModal (state) {
      state.moreInfoModalDisplay = !state.moreInfoModalDisplay
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
