<template>
  <div class="home">
    <RadioPlayer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RadioPlayer from '@/components/RadioPlayer.vue'

export default {
  name: 'home',
  components: {
    RadioPlayer
  }
}
</script>
