<demo>
Basic
</demo>
<template>
  <Radio v-model:select="select" label="1">One</Radio>
  <Radio v-model:select="select" label="2">Two</Radio>
  <Radio v-model:select="select" label="3">Three</Radio>
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Radio1Demo",
  components: {Radio},
  setup() {
    const select = ref('2')
    return {select}
  }
})
</script>