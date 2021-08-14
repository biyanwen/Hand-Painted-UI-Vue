<template>
  <div class="buttonDemo">
    <h1>Examples</h1>
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import Button1Demo from '../components/Button1Demo.vue'
import Button2Demo from '../components/Button2Demo.vue'
import Button3Demo from '../components/Button3Demo.vue'
import Button4Demo from '../components/Button4Demo.vue'
import Button5Demo from '../components/Button5Demo.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "ButtonDemo",
  components: {Button, Demo, Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo},
  setup() {
    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo}
  }
})
</script>

<style lang="scss">
.buttonDemo {
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