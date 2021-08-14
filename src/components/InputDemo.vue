<template>
  <div class="inputDemo">
    <h1>Examples</h1>
    <Demo :component="InputDemo1"></Demo>
    <Demo :component="InputDemo2"></Demo>
    <Demo :component="InputDemo3"></Demo>
    <Demo :component="InputDemo4"></Demo>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Demo from "../components/Demo.vue"
import InputDemo1 from '../components/InputDemo1.vue'
import InputDemo2 from '../components/InputDemo2.vue'
import InputDemo3 from '../components/InputDemo3.vue'
import InputDemo4 from '../components/InputDemo4.vue'

export default defineComponent({
  name: "InputDemo",
  components: {Demo, InputDemo1, InputDemo2, InputDemo3, InputDemo4},
  setup() {
    return {InputDemo1, InputDemo2, InputDemo3, InputDemo4}
  }
})
</script>

<style lang="scss" scoped>
.inputDemo {
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