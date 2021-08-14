<template>
  <div class="inputDemo">
    <h1>Examples</h1>
    <Demo :component="InputDemo1"></Demo>
    <Demo :component="InputDemo2"></Demo>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Demo from "../components/Demo.vue"
import InputDemo1 from '../components/InputDemo1.vue'
import InputDemo2 from '../components/InputDemo2.vue'

export default defineComponent({
  name: "InputDemo",
  components: {Demo, InputDemo1, InputDemo2},
  setup() {
    return {InputDemo1, InputDemo2}
  }
})
</script>

<style lang="scss" scoped>

</style>