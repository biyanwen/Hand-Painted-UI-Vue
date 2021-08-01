<demo>
Disable
</demo>
<template>
  <div class="button-disable">
    <Button disabled>default button</Button>
    <Button theme="primary" disabled>primary button
    </Button>
    <Button theme="dashed" disabled>dashed button
    </Button>
    <Button theme="text" disabled>text button
    </Button>
    <Button theme="link" disabled>link button
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "Button4Demo",
  components: {Button},
}
</script>

<style lang="scss" scoped>
.button-disable {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>