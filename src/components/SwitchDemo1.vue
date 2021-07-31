<demo>
Basic
</demo>
<template>
  <Switch v-model:onOrOff="onOrOff"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "SwitchDemo1",
  components: {Switch},
  setup() {
    const onOrOff = ref(false)
    return {onOrOff}
  }
}
</script>
