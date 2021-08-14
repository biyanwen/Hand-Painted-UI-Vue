<template>
  <div class="calendarDemo">
    <h1>Examples</h1>
    <Demo :component="Calendar1Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Calendar1Demo from "../components/Calendar1Demo.vue";
import Demo from "../components/Demo.vue"
import {defineComponent} from "vue";

export default defineComponent({
  name: "CalendarDemo",
  components: {Calendar1Demo, Demo},
  setup() {
    return {Calendar1Demo}
  }
})
</script>
<style lang="scss" scoped>

.calendarDemo {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  justify-content: center;

  > h1 {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
}

</style>