<demo>
Disabled
</demo>
<template>
  <Switch v-model:onOrOff="onOrOff" disabled/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "SwitchDemo2",
  components: {Switch},
  setup() {
    const onOrOff = ref(false)
    return {onOrOff}
  }
})
</script>