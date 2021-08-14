<demo>
Password
</demo>
<template>
  <Input password placeholder="Enter content"></Input>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Input from "../lib/Input.vue";

export default defineComponent({
  name: "InputDemo4",
  components: {Input}
})
</script>

<style lang="scss" scoped>

</style>