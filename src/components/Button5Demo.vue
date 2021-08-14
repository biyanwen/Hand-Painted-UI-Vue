<demo>
Loading
</demo>
<template>
  <div class="button-loading">
    <Button loading>default button</Button>
    <Button theme="primary" loading>primary button
    </Button>
    <Button theme="dashed" loading>dashed button
    </Button>
    <Button theme="text" loading>text button
    </Button>
    <Button theme="link" loading>link button
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "Button5Demo",
  components: {Button},
})
</script>

<style lang="scss" scoped>
.button-loading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>