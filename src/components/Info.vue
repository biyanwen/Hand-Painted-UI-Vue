<template>
  <article class="markdown-body" v-html="info"></article>
</template>

<script lang="ts">
import info from '../md/info.md'

export default {
  name: "Info",
  data() {
    return {info}
  }
}
</script>

<style lang="scss" scoped>

</style>