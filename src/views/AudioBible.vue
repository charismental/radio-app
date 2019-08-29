<template>
  <div class="about">
    <div class="about-header">
      <div class="divider"><hr></div>
      <span class="about-title">Audio Bible</span>
      <div class="divider"><hr></div>
      <div class="about-body">
        <!-- <v-expansion-panels>
          <v-expansion-panel
            v-for="(book,i) in bible"
            :key="i"
          >
            <v-expansion-panel-header>{{ book.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card>
                <v-list dense>
                  <v-list-item
                    v-for="(chapter, i) in book.chapters"
                    :key="i">
                    <v-list-item-content>
                      <v-list-item-title>Chapter: {{ chapter.number }}</v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels> -->
        <v-card>
          <v-list>
            <v-list-group
              v-for="book in bible"
              :key="book.index"
              v-model="book.active"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="book.name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(chapter, i) in book.chapters"
                :key="i"
                @click="pauseBibleSwitch(chapter.path)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="chapter.number"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'audiobible',
  methods: {
    ...mapMutations([
      'switchToBible'
    ]),
    ...mapActions([
      'pauseBibleSwitch'
    ])
  },
  computed: {
    ...mapState([
      'audioBible',
      'bible'
    ])
  },
  created () {
  }
}
</script>

<style>
.v-list {
  height: 374px;
  overflow-y: auto;
}
.about {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.about-header {
  width: inherit;
  position: fixed;
}
.about-title {
  font-weight: 500;
  font-size: 32px;
}
.about hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.about-body {
  overflow: auto;
  max-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .about-header {
    width: 320px;
  }
  .about-body {
    width: 290px;
  }
} */
@media only screen and (min-width: 768px) {
  .about {
    width: 360px;
  }
}
</style>
