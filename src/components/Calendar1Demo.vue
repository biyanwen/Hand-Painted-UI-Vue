<demo>
Basic
</demo>
<template>
  <Calendar v-model="date"></Calendar>
</template>

<script lang="ts">
import Calendar from '../lib/Calendar.vue'
import {ref, watchEffect} from "vue";

export default {
  name: "Calendar1Demo",
  components: {Calendar},
  setup() {
    let date = ref(new Date())
    return {date}
  }
}
</script>