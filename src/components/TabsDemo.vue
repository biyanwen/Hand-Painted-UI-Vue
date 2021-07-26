<template>
  <div class="tabsDemo">
    <Tabs :select="select">
      <Tab title="Tab1">this is message one</Tab>
      <Tab title="Tab2">this is message two</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from "vue";

export default {
  name: "TabsDemo",
  components: {Tabs, Tab},
  setup() {
    const select = ref<String>("Tab1")
    return {select}
  }
}
</script>

<style lang="scss" scoped>
.tabsDemo {
  height: 100vh;
}
</style>