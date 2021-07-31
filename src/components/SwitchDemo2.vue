<template>
  <Switch v-model:onOrOff="onOrOff" disabled/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "SwitchDemo2",
  components: {Switch},
  setup() {
    const onOrOff = ref(false)
    return {onOrOff}
  }
}
</script>

<style lang="scss">

</style>