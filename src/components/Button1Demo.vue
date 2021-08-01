<demo>
Type
</demo>
<template>
  <div class="button-type">
    <Button theme="primary">primary button
    </Button>
    <Button theme="dashed">dashed button
    </Button>
    <Button theme="text">text button
    </Button>
    <Button theme="link">link button
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "Button1Demo",
  components: {Button},
}
</script>

<style lang="scss" scoped>
.button-type{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>