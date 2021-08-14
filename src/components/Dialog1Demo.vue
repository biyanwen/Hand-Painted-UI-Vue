<demo>
Basic
</demo>
<template>
  <div class="dialogDemo">
    <Button @click="modifyVisible" class="dialogButton">
      Open Dialog
    </Button>
    <Dialog v-model:visible="visible"
            :ok="ok"
            :no="no">
      <template v-slot:title>
        This is title
      </template>
      <template v-slot:context>
        This is a message
      </template>
      <template v-slot:ok>
        ok
      </template>
      <template v-slot:no>
        no
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from "../lib/Button.vue";
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Dialog1Demo",
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const ok = () => {
      alert("这里是ok")
    }
    const no = () => {
      alert("这里是no")
    }
    const modifyVisible = () => {
      visible.value = !visible.value
    }
    return {visible, ok, no, modifyVisible}
  }
})
</script>

<style lang="scss" scoped>
</style>