<template>
  <div class="radioDemo">
    <h1>Examples</h1>
    <Demo :component="Radio1Demo"></Demo>
    <Demo :component="Radio2Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Radio1Demo from '../components/Radio1Demo.vue'
import Radio2Demo from '../components/Radio2Demo.vue'
import Demo from './Demo.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "RadioDemo",
  components: {Radio1Demo, Demo, Radio2Demo},
  setup() {
    return {Radio1Demo, Radio2Demo}
  }
})
</script>

<style lang="scss" scoped>
.radioDemo {
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