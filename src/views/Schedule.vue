<template>
  <div class="schedule">
    <div class="schedule-header">
      <div class="divider"><hr /></div>
      <div class="schedule-title">
        Schedule -
        <span
          style="font-weight: bold; cursor: pointer"
          @click="showTuesdayThursday = !showTuesdayThursday"
          >{{ showTuesdayThursday ? "Tue/Thu" : "Mo/We/Fr" }}</span
        >
      </div>
      <div class="divider"><hr /></div>
      <div class="schedule-body">
        <simplebar id="schedule-container" data-simplebar-auto-hide="true">
          <div
            class="schedule-item"
            v-for="(item, i) in firstSchedule"
            :key="i"
          >
            <div class="schedule-img-container">
              <img :src="item.picture" class="schedule-img" />
            </div>
            <div class="schedule-ministry-info">
              <span class="time-slot">{{ item.timeslot }}</span>
              <span class="ministry-name">{{ item.ministry }}</span>
              <span class="speaker">{{ item.speaker }}</span>
              <hr />
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import 'simplebar/dist/simplebar.min.css'
// @ is an alias to /src
// import RadioPlayer from '@/components/RadioPlayer.vue'

export default {
  name: 'schedule',
  components: {
    simplebar
  },
  data () {
    return {
      showTuesdayThursday: false,
      mwf: [
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '12:30AM - 1:00AM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Alistair Begg',
          ministry: 'Truth for Life',
          timeslot: '1:00AM - 1:30AM',
          picture: '../../assets/alistair.png',
          homepage: 'https://www.truthforlife.org/'
        },
        {
          speaker: 'David Pawson',
          ministry: 'David Pawson Teaching Library',
          timeslot: '2:30AM - 3:30AM',
          picture: '../../assets/david.png',
          homepage: 'https://www.davidpawson.org/'
        },
        {
          speaker: 'Curtis Dougherty',
          ministry: 'Curtis Dougherty Ministries',
          timeslot: '4:30AM - 6:00AM',
          picture: '../../assets/curtis.png',
          homepage: 'https://www.cascadechapel.org/'
        },
        {
          speaker: 'Dr. John Casteel',
          ministry: 'John Casteel Ministries',
          timeslot: '6:30AM - 7:30AM',
          picture: '../../assets/john.png',
          homepage: 'http://www.johncasteel.com/'
        },
        {
          speaker: 'Paul Washer',
          ministry: 'HeartCry Missionary Society',
          timeslot: '8:30AM - 10:00AM',
          picture: '../../assets/paul.png',
          homepage: 'http://www.heartcrymission.com/'
        },
        {
          speaker: 'Chuck Missler',
          ministry: '66/40 with Chuck Missler',
          timeslot: '10:30AM - 11:00AM',
          picture: '../../assets/chuck.png',
          homepage: 'https://www.khouse.org/'
        },
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '11:00AM - 11:30AM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Alistair Begg',
          ministry: 'Truth for Life',
          timeslot: '1:00PM - 1:30PM',
          picture: '../../assets/alistair.png',
          homepage: 'https://www.truthforlife.org/'
        },
        {
          speaker: 'David Pawson',
          ministry: 'David Pawson Teaching Library',
          timeslot: '2:30PM - 3:30PM',
          picture: '../../assets/david.png',
          homepage: 'https://www.davidpawson.org/'
        },
        {
          speaker: 'Curtis Dougherty',
          ministry: 'Curtis Dougherty Ministries',
          timeslot: '4:30PM - 6:00PM',
          picture: '../../assets/curtis.png',
          homepage: 'https://www.cascadechapel.org/'
        },
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '6:30PM - 7:00PM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Dr. John Casteel',
          ministry: 'John Casteel Ministries',
          timeslot: '7:00PM - 8:00PM',
          picture: '../../assets/john.png',
          homepage: 'http://www.johncasteel.com/'
        },
        {
          speaker: 'Paul Washer',
          ministry: 'HeartCry Missionary Society',
          timeslot: '9:00PM - 10:30PM',
          picture: '../../assets/paul.png',
          homepage: 'http://www.heartcrymission.com/'
        },
        {
          speaker: 'Chuck Missler',
          ministry: '66/40 with Chuck Missler',
          timeslot: '11:00PM - 11:30PM',
          picture: '../../assets/chuck.png',
          homepage: 'https://www.khouse.org/'
        }
      ],
      tt: [
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '12:30AM - 1:00AM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Alistair Begg',
          ministry: 'Truth for Life',
          timeslot: '1:00AM - 1:30AM',
          picture: '../../assets/alistair.png',
          homepage: 'https://www.truthforlife.org/'
        },
        {
          speaker: 'Ern Baxter',
          ministry: 'Ern Baxter Teaching Legacy',
          timeslot: '2:30AM - 3:30AM',
          picture: '../../assets/ern.png',
          homepage: 'https://www.gracewayradio.com/'
        },
        {
          speaker: 'Jamie Buckingham',
          ministry: 'Risky Living Ministries',
          timeslot: '4:30AM - 5:30AM',
          picture: '../../assets/jamie.png',
          homepage: 'https://www.jamiebuckinghamministries.com/'
        },
        {
          speaker: 'Derek Prince',
          ministry: 'Derek Prince Ministries',
          timeslot: '6:30AM - 7:30AM',
          picture: '../../assets/derek.png',
          homepage: 'https://www.derekprince.org/'
        },
        {
          speaker: 'David Wilkerson',
          ministry: 'Time Square Church',
          timeslot: '8:30AM - 9:30AM',
          picture: '../../assets/wilkerson.png',
          homepage: 'https://tsc.nyc/'
        },
        {
          speaker: 'Chuck Missler',
          ministry: '66/40 with Chuck Missler',
          timeslot: '10:30AM - 11:00AM',
          picture: '../../assets/chuck.png',
          homepage: 'https://www.khouse.org/'
        },
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '11:00AM - 11:30AM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Alistair Begg',
          ministry: 'Truth for Life',
          timeslot: '1:00PM - 1:30PM',
          picture: '../../assets/alistair.png',
          homepage: 'https://www.truthforlife.org/'
        },
        {
          speaker: 'Ern Baxter',
          ministry: 'Ern Baxter Teaching Legacy',
          timeslot: '2:30PM - 3:30PM',
          picture: '../../assets/ern.png',
          homepage: 'https://www.gracewayradio.com/'
        },
        {
          speaker: 'Jamie Buckingham',
          ministry: 'Risky Living Ministries',
          timeslot: '4:30PM - 5:30PM',
          picture: '../../assets/jamie.png',
          homepage: 'https://www.jamiebuckinghamministries.com/'
        },
        {
          speaker: 'Alexander Scourby',
          ministry: 'Bible Reading',
          timeslot: '6:30PM - 7:00PM',
          picture: '../../assets/scourby.png',
          homepage: 'https://www.scourby.com/'
        },
        {
          speaker: 'Derek Prince',
          ministry: 'Derek Prince Ministries',
          timeslot: '7:00PM - 8:00PM',
          picture: '../../assets/derek.png',
          homepage: 'https://www.derekprince.org/'
        },
        {
          speaker: 'David Wilkerson',
          ministry: 'Time Square Church',
          timeslot: '9:00AM - 10:00PM',
          picture: '../../assets/wilkerson.png',
          homepage: 'https://tsc.nyc/'
        },
        {
          speaker: 'Chuck Missler',
          ministry: '66/40 with Chuck Missler',
          timeslot: '11:00PM - 11:30PM',
          picture: '../../assets/chuck.png',
          homepage: 'https://www.khouse.org/'
        }
      ]
    }
  },
  mounted () {
    if (this.tuesdayThursday) {
      this.showTuesdayThursday = true
    }
  },
  computed: {
    tuesdayThursday () {
      const dateObj = new Date()
      const today = dateObj.getDay()
      return today === 2 || today === 4
    },
    firstSchedule () {
      if (this.showTuesdayThursday) {
        return this.tt
      }
      return this.mwf
    }
  }
}
</script>

<style>
.schedule {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.schedule-header {
  width: inherit;
  position: fixed;
}
.schedule-title {
  font-weight: 500;
  font-size: 32px;
}
.schedule hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
}
.schedule-body {
  overflow: auto;
  max-height: calc(100vh - 220px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
}
.schedule-item {
  height: 95px;
  display: flex;
  width: calc(100vw - 20px);
}
/* .schedule-item:first-child:hover {
  transform: scale(1.15) translate(30px,5px);
}
.schedule-item:hover {
  transform: scale(1.15) translate(30px,0px);
} */
.schedule-item hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #ffffffbf,
    rgba(255, 255, 255, 0)
  );
}
.schedule-img {
  max-height: 80px;
  max-width: 80px;
}
.schedule-img-container {
  float: left;
  padding-right: 10px;
  padding-left: 10px;
  width: 100px;
  margin: auto 0;
}
.schedule-ministry-info {
  text-align: left;
  width: 100%;
  margin: auto 0;
}
.schedule-ministry-info span.time-slot {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  /* transform: scale(.7, 1); */
  font-size: 20px;
  color: darkslategray;
  display: block;
}
.schedule-ministry-info span.ministry-name {
  font-family: "Open Sans", sans-serif;
  font-weight: 250;
  font-size: 16px;
  color: #fff;
  display: block;
}
.schedule-ministry-info span.speaker {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: gray;
  display: block;
}
@media only screen and (min-width: 768px) {
  .schedule {
    width: 360px;
  }
  .schedule-body {
    max-height: 419px;
    width: 360px;
  }
  .schedule-header {
    width: 360px;
  }
  .schedule-item {
    width: 340px;
  }
}
@media only screen and (max-width: 359px) and (min-width: 320px) {
  .schedule-ministry-info span.ministry-name {
    font-size: 14px;
  }
}
</style>
