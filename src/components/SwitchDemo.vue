<template>
  <div class="switchDemo">
    <h1>Examples</h1>
    <Demo :component="SwitchDemo1"></Demo>
    <Demo :component="SwitchDemo2"></Demo>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from '../components/SwitchDemo1.vue'
import SwitchDemo2 from '../components/SwitchDemo2.vue'
import Demo from './Demo.vue'

import Button from "../lib/Button.vue";
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "SwitchDemo",
  components: {Button, SwitchDemo1, SwitchDemo2, Demo},
  setup() {
    const showCode2 = () => {
      let showCodeOne = document.getElementById('demo-code-switch2');
      if (showCodeOne.style.display === 'none') {
        showCodeOne.style.display = "block"
      } else {
        showCodeOne.style.display = 'none'
      }
    }
    const codeVisible = ref<Boolean>(false)
    return {SwitchDemo1, SwitchDemo2, showCode2, codeVisible}
  }
})
</script>

<style lang="scss">
.switchDemo {
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