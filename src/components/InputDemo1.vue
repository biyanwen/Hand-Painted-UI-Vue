<demo>
Basic
</demo>
<template>
  <Input v-model:inputValue="input" placeholder="Please enter content"></Input>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Input from "../lib/Input.vue";

export default defineComponent({
  name: "InputDemo1",
  components: {Input},
  setup() {
    let input = ref('')
    return {input}
  }
})
</script>

<style lang="scss" scoped>

</style>