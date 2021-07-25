<template>
  <div class="dialogDemo">
    <Dialog v-model:visible="visible"
            :ok="ok"
            :no="no">Open Dialog
    </Dialog>
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
    const ok = () => {
      alert("这里是ok")
    }
    const no = () => {
      alert("这里是no")
    }
    return {visible, ok, no}
  }
}
</script>

<style lang="scss" scoped>
.dialogDemo {
  height: 100vh;
}
</style>