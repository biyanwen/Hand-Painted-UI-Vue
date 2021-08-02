<template>
  <Radio v-model:select="select" label="1">One</Radio>
  <Radio v-model:select="select" label="2">Two</Radio>
  <Radio v-model:select="select" label="3">Three</Radio>
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue'
import {ref} from "vue";

export default {
  name: "RadioDemo",
  components: {Radio},
  setup() {
    const select = ref('2')
    return {select}
  }
}
</script>

<style lang="scss" scoped>

</style>