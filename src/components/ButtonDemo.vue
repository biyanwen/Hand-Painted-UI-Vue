<template>
  <div class="buttonDemo">
    <Button
        @click="test"
        @focus="test"
        @mouseover="test"
    >default button
    </Button>
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
  name: "ButtonDemo",
  components: {Button},
  setup() {
    const test = () => {
      console.log("999")
    }
    return {test}
  }
}
</script>

<style lang="scss" scoped>
.buttonDemo {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
</style>