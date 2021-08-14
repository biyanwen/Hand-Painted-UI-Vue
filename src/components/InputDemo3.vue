<demo>
Clearable
</demo>
<template>
  <Input clearable placeholder="Enter content"></Input>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Input from "../lib/Input.vue";

export default defineComponent({
  name: "InputDemo3",
  components: {Input}
})
</script>

<style lang="scss" scoped>

</style>