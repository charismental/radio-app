<template>
    <transition-group name="fade">
      <div class="more-info-modal" v-if="moreInfoModalDisplay" key="1">
        <div class="modal-inner">
          <span class="more-info-header">More Info</span>
          <div class="divider"><hr></div>
        </div>
      </div>
      <div class="modal-overlay" v-show="moreInfoModalDisplay" @click="toggleMoreInfoModal" key="2"></div>
    </transition-group>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'More-Info-Modal',
  computed: {
    ...mapState([
      'moreInfoModalDisplay'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleMoreInfoModal'
    ])
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
  display: inline-flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30vh;
  z-index: 1010;
  background: white;
  color: #696969;
  text-align: center;
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
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    width: 360px;
  }
}
</style>
