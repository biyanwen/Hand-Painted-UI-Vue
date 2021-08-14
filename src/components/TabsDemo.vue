<template>
  <div class="tabsDemo">
    <h1>Examples</h1>
    <Demo :component="Tabs1Demo"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from '../components/Tabs1Demo.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "TabsDemo",
  components: {Demo, Tabs1Demo},
  setup() {
    return {Demo, Tabs1Demo}
  }
})
</script>

<style lang="scss" scoped>

.tabsDemo {
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