<template>
  <div class="info-div">
    <article class="markdown-body" v-html="infoMd"></article>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import infoMd from '../../md/info.md'

export default defineComponent({
  name: "Info",
  setup() {
    return {infoMd}
  }
})
</script>

<style lang="scss" scoped>
.info-div{
  margin-top: 30px;
}
</style>