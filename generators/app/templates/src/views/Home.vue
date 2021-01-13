<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <time-select></time-select>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TimeSelect from '@/components/timeSelect.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    TimeSelect
  }
}
</script>
