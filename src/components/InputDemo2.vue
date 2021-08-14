<demo>
Disable
</demo>
<template>
  <Input disabled placeholder="Please enter content"></Input>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Input from "../lib/Input.vue";

export default defineComponent({
  name: "InputDemo2",
  components: {Input}
})
</script>

<style lang="scss" scoped>

</style>