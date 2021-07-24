<template>
  <div class="dialogDemo">
    <Dialog visible>Open Dialog</Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'

export default {
  name: "DialogDemo",
  components: {Dialog}
}
</script>

<style lang="scss" scoped>
.dialogDemo {
  height: 100vh;
}
</style>