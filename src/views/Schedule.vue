<template>
  <div class="schedule">
    <div class="schedule-header">
      <div class="divider"><hr></div>
      <span class="schedule-title">Schedule</span>
      <div class="divider"><hr></div>
      <div class="schedule-body">
        <simplebar id="schedule-container" data-simplebar-auto-hide="true">
            <div class="schedule-item" v-for="(item, i) in schedule" :key="i">
                <div class="schedule-img-container">
                    <img :src="item.picture" class="schedule-img">
                </div>
                <div class="schedule-ministry-info">
                    <span class="time-slot">{{ item.timeslot }}</span>
                    <span class="ministry-name">{{ item.ministry }}</span>
                    <span class="speaker">{{ item.speaker }}</span>
                    <hr>
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
      schedule: [
        {
          'speaker': 'David Pawson',
          'ministry': 'David Pawson Teaching Library',
          'timeslot': '12:30AM - 1:30AM',
          'picture': '../../assets/david.png',
          'homepage': 'https://www.davidpawson.org/'
        },
        {
          'speaker': 'Alexander Scourby',
          'ministry': 'Bible Reading',
          'timeslot': '2:00AM - 2:30AM',
          'picture': '../../assets/scourby.png',
          'homepage': 'https://www.scourby.com/'
        },
        {
          'speaker': 'Alistair Begg',
          'ministry': 'Truth for Life',
          'timeslot': '3:30AM - 4:00AM',
          'picture': '../../assets/alistair.png',
          'homepage': 'https://www.truthforlife.org/'
        },
        {
          'speaker': 'Chuck Missler',
          'ministry': '66/40 with Chuck Missler',
          'timeslot': '4:00AM - 4:30AM',
          'picture': '../../assets/chuck.png',
          'homepage': 'https://www.khouse.org/'
        },
        {
          'speaker': 'Jamie Buckingham',
          'ministry': 'Risky Living Ministries',
          'timeslot': '5:00AM - 6:00AM',
          'picture': '../../assets/jamie.png',
          'homepage': 'https://www.jamiebuckinghamministries.com/'
        },
        {
          'speaker': 'Dr. John Casteel',
          'ministry': 'John Casteel Ministries',
          'timeslot': '6:30AM - 7:30AM',
          'picture': '../../assets/john.png',
          'homepage': 'http://www.johncasteel.com/'
        },
        {
          'speaker': 'Steve Schell',
          'ministry': 'Life Lessons Radio',
          'timeslot': '8:00AM - 8:30AM',
          'picture': '../../assets/steve.png',
          'homepage': 'https://www.lifelessonsradio.org/'
        },
        {
          'speaker': 'Curtis Dougherty',
          'ministry': 'Curtis Dougherty Ministries',
          'timeslot': '8:30AM - 9:45AM',
          'picture': '../../assets/curtis.png',
          'homepage': 'https://www.cascadechapel.org/'
        },
        {
          'speaker': 'David Pawson',
          'ministry': 'David Pawson Teaching Library',
          'timeslot': '10:00AM - 11:00AM',
          'picture': '../../assets/david.png',
          'homepage': 'https://www.davidpawson.org/'
        },
        {
          'speaker': 'Paul Washer',
          'ministry': 'HeartCry Missionary Society',
          'timeslot': '11:00AM - 12:00PM',
          'picture': '../../assets/paul.png',
          'homepage': 'http://www.heartcrymission.com/'
        },
        {
          'speaker': 'Alistair Begg',
          'ministry': 'Truth for Life',
          'timeslot': '12:30PM - 1:00PM',
          'picture': '../../assets/alistair.png',
          'homepage': 'https://www.truthforlife.org/'
        },
        {
          'speaker': 'Ern Baxter',
          'ministry': 'Ern Baxter Teaching Legacy',
          'timeslot': '1:30PM - 2:45PM',
          'picture': '../../assets/ern.png',
          'homepage': 'https://www.radiomv.org/'
        },
        {
          'speaker': 'Alexander Scourby',
          'ministry': 'Bible Reading',
          'timeslot': '2:50PM - 3:20PM',
          'picture': '../../assets/scourby.png',
          'homepage': 'https://www.scourby.com/'
        },
        {
          'speaker': 'Jamie Buckingham',
          'ministry': 'Risky Living Ministries',
          'timeslot': '3:30PM - 4:30PM',
          'picture': '../../assets/jamie.png',
          'homepage': 'https://www.jamiebuckinghamministries.com/'
        },
        {
          'speaker': 'Curtis Dougherty',
          'ministry': 'Curtis Dougherty Ministries',
          'timeslot': '4:30PM - 5:45PM',
          'picture': '../../assets/curtis.png',
          'homepage': 'https://www.cascadechapel.org/'
        },
        {
          'speaker': 'Alexander Scourby',
          'ministry': 'Bible Reading',
          'timeslot': '5:45PM - 6:15PM',
          'picture': '../../assets/scourby.png',
          'homepage': 'https://www.scourby.com/'
        },
        {
          'speaker': 'Steve Schell',
          'ministry': 'Life Lessons Radio',
          'timeslot': '6:30PM - 7:00PM',
          'picture': '../../assets/steve.png',
          'homepage': 'https://www.lifelessonsradio.org/'
        },
        {
          'speaker': 'Derek Prince',
          'ministry': 'Derek Prince Ministries',
          'timeslot': '7:00PM - 8:15PM',
          'picture': '../../assets/derek.png',
          'homepage': 'https://www.derekprince.org/'
        },
        {
          'speaker': 'Chuck Missler',
          'ministry': '66/40 with Chuck Missler',
          'timeslot': '8:30PM - 9:00PM',
          'picture': '../../assets/chuck.png',
          'homepage': 'https://www.khouse.org/'
        },
        {
          'speaker': 'Paul Washer',
          'ministry': 'HeartCry Missionary Society',
          'timeslot': '9:30PM - 10:30PM',
          'picture': '../../assets/paul.png',
          'homepage': 'http://www.heartcrymission.com/'
        },
        {
          'speaker': 'Ern Baxter',
          'ministry': 'Ern Baxter Teaching Legacy',
          'timeslot': '11:00PM - 12:15AM',
          'picture': '../../assets/ern.png',
          'homepage': 'https://www.radiomv.org/'
        }
      ]
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
.schedule hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
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
.schedule-item hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffffbf, rgba(255, 255, 255, 0));
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
  display: block; }
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
