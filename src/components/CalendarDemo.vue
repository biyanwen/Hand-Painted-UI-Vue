<template>
  <Calendar v-model="date"></Calendar>
</template>

<script lang="ts">
import Calendar from '../lib/Calendar.vue'
import {ref, watchEffect} from "vue";

export default {
  name: "CalendarDemo",
  components: {Calendar},
  setup() {
    let date = ref(new Date())
    return {date}
  }
}
</script>

<style lang="scss" scoped>

</style>