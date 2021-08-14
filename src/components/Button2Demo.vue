<demo>
Level
</demo>
<template>
  <div class="button-level">
    <Button level="danger">danger button
    </Button>
    <Button level="warning">warning button
    </Button>
    <Button level="success">success button
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "Button2Demo",
  components: {Button},
})
</script>

<style lang="scss" scoped>
.button-level {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>