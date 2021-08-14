<demo>
Basic
</demo>
<template>
  <Switch v-model:onOrOff="onOrOff"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "SwitchDemo1",
  components: {Switch},
  setup() {
    const onOrOff = ref(false)
    return {onOrOff}
  }
})
</script>
