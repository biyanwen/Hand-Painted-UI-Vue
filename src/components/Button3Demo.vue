<demo>
Size
</demo>
<template>
  <div class="button-Size">
    <Button level="success" size="small">small
    </Button>
    <Button level="success">default
    </Button>
    <Button level="success" size="big">big
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {defineComponent} from "vue";

export default defineComponent({
  name: "Button3Demo",
  components: {Button},
})
</script>

<style lang="scss" scoped>
.button-Size {
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>