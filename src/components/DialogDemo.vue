<template>
  <div class="dialogDemo">
    <h1>Examples</h1>
    <Demo :component="Dialog1Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from '../components/Dialog1Demo.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "DialogDemo",
  components: {Dialog1Demo, Demo},
  setup() {
    return {Dialog1Demo}
  }
})
</script>

<style lang="scss" scoped>
.dialogDemo {
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