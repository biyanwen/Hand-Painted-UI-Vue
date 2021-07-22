<template>
  <div class="SwitchDemo">
    <Switch v-model:onOrOff="onOrOff"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {Switch},
  setup() {
    const onOrOff = ref(false)
    return {onOrOff}
  }
}
</script>

<style lang="scss" scoped>
.SwitchDemo {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>