<template>
  <div class="dialogDemo">
    <Dialog v-model:visible="visible">Open Dialog</Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import {ref} from "vue";

export default {
  name: "DialogDemo",
  components: {Dialog},
  setup() {
    const visible = ref(false)
    return {visible}
  }
}
</script>

<style lang="scss" scoped>
.dialogDemo {
  height: 100vh;
}
</style>