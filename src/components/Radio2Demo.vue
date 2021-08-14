<demo>
Disabled
</demo>
<template>
  <Radio v-model:select="select" label="1" disabled>One</Radio>
  <Radio v-model:select="select" label="2" disabled>Two</Radio>
  <Radio v-model:select="select" label="3" disabled>Three</Radio>
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue'
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Radio2Demo",
  components: {Radio},
  setup() {
    const select = ref('2')
    return {select}
  }
})
</script>