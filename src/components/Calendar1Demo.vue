<demo>
Basic
</demo>
<template>
  <Calendar v-model="date"></Calendar>
</template>

<script lang="ts">
import Calendar from '../lib/Calendar.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Calendar1Demo",
  components: {Calendar},
  setup() {
    let date = ref(new Date())
    return {date}
  }
})
</script>