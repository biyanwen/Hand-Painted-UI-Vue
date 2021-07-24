<template>
  <div class="buttonDemo">
    <h1>示例一</h1>
    <div>
      <Button>default button</Button>
      <Button theme="primary">primary button
      </Button>
      <Button theme="dashed">dashed button
      </Button>
      <Button theme="text">text button
      </Button>
      <Button theme="link">link button
      </Button>
    </div>
    <h1>示例二</h1>
    <div>
      <Button level="danger">danger button
      </Button>
      <Button level="warning">warning button
      </Button>
      <Button level="success">success button
      </Button>
    </div>
    <h1>示例三</h1>
    <div>
      <Button level="success" size="small">small
      </Button>
      <Button level="success">default
      </Button>
      <Button level="success" size="big">big
      </Button>
    </div>
    <h1>示例四</h1>
    <div>
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
    <h1>示例五</h1>
    <div>
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
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "ButtonDemo",
  components: {Button},
}
</script>

<style lang="scss" scoped>
.buttonDemo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh;
}
</style>