<template>
  <div id="timeSelect">
    <select name="timeSelect" class="timeSelect" v-model="hoursStart">
      <option
        v-for="item in setTimer(0, 24)"
        :value="item"
        :key="item"
      >{{ item }}</option>
    </select>
    <select name="timeSelect" class="timeSelect" v-model="miniStart">
      <option
        v-for="item in setTimer(0, 60)"
        :value="item"
        :key="item"
      >{{ item }}</option>
    </select>
    <select name="timeSelect" class="timeSelect" v-model="hoursEnd" @change="handleHoursEnd">
      <option
        v-for="item in setTimeCludeCh(hoursStart, 24)"
        :value="item"
        :key="item"
      >{{ item }}</option>
    </select>
    <select name="timeSelect" class="timeSelect" v-model="muniEnd">
      <option
        v-for="item in miniEndArr"
        :value="item"
        :key="item"
      >{{ item }}</option>
    </select>
    <button @click="showDrawer">test Drawer</button>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="true"
      @close="onClose"
      :visible="visible">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data () {
    return {
      data: 'comonents',
      // time: [],
      visible: false,
      hoursStart: '',
      miniStart: '',
      hoursEnd: '',
      muniEnd: '',
      miniEndArr: []
    }
  },
  created () {
    // this.setTimer(0, 24)
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    onClose () {
      this.visible = false
    },
    showDrawer () {
      this.visible = true
    },
    setTimer (start, end) {
      let arr = []
      for (let index = start; index < end; index++) {
        arr.push(this.paddingZero(String(index)))
      }
      // this.time = arr
      return arr
    },
    setTimeCludeCh (startH, end) {
      let arr = []
      let arrChin = []
      let deffe = end - startH
      for (let index = startH; index < end; index++) {
        arr.push(this.paddingZero(String(index)))
      }
      for (let index = 0; index < 31 - deffe; index++) {
        if (index > 23) {
          break
        }
        arrChin.push(`次日${this.paddingZero(String(index))}`)
      }
      return [...arr, ...arrChin]
    },
    paddingZero (v) {
      if (v.length < 2) {
        return `0${v}`
      } else {
        return v
      }
    },
    handleHoursEnd () {
      console.log(this.miniEndArr)
      if (this.hoursStart === this.hoursEnd) {
        this.miniEndArr = [...this.setTimer(parseInt(this.miniStart) + 1, 60)]
      } else {
        this.miniEndArr = [...this.setTimer(0, 60)]
      }
    }
  }
}
</script>

<style scoped lang="scss">
#timeSelect {
  .timeSelect {
    width: 130px;
    height: 32px;
  }
  .timeSelect {

  }
}
</style>
