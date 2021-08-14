<demo>
Basic
</demo>
<template>
  <Tabs v-model:select="select">
    <Tab title="Tab1">this is message for Tab1</Tab>
    <Tab title="Tab2">this is message for Tab2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Tabs1Demo",
  components: {Tabs, Tab},
  setup() {
    const select = ref("Tab1")
    return {select}
  }
})
</script>
