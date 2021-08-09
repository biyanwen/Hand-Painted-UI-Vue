<template>
  <div class="hand-tabs-title-father">
    <div class="hand-tabs-title-div">
      <Button class="hand-tabs-title hand-tabs-title-background " @click="checkTitle"
              :id="`hand-title-select-${title}`" v-for="title in titles">{{ title }}
      </Button>
    </div>
    <div class="hand-tabs-title-context ">
      <component :is="getCurrent" :key="getCurrent.props.title"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Button from "./Button.vue"
import {computed, onMounted, watchEffect} from "vue";

interface TabsProps {
  select: String
}

interface TabsContext {
  emit: (event: string, ...args: unknown[]) => void,
  slots: {
    default: () => []
  }
}

export default {
  name: "Tabs",
  components: {Button},
  props: {
    select: String
  },
  setup(props: TabsProps, context: TabsContext) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if ((tag as any).type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    let getCurrent = computed(() => {
      return defaults.filter((item) => {
        return (item as any).props.title === props.select
      })[0]
    })
    const titles = defaults.map(item => (item as any).props.title)

    onMounted(() => {
      watchEffect(() => {
        let id = 'hand-title-select-' + props.select
        let backgroundClass = 'hand-tabs-title-background'

        let titleSelectElement = document.getElementById(id)
        for (let i = 0; i < (titleSelectElement?.parentElement?.children.length as any); i++) {
          titleSelectElement?.parentElement?.children[i].classList.remove(backgroundClass)
        }
        // for (let child of titleSelectElement?.parentElement.children) {
        //   child.classList.remove(backgroundClass)
        // }

        titleSelectElement?.classList.add(backgroundClass)
      })
    })

    const checkTitle = (e: Event) => {
      context.emit('update:select', (e.target as any)?.innerText)
    }
    return {getCurrent, defaults, titles, checkTitle}
  }
}
</script>

<style lang="scss">
.hand-tabs-title-father {
  font-family: 'HandPainted', serif;
  width: 100%;

  > .hand-tabs-title-div {
    display: flex;

    > .hand-tabs-title {
      border: none;
      margin-left: 35px;
      font-size: 25px;
    }
  }

  > .hand-tabs-title-context {
    border: solid #868484;
    border-width: 2px 2.5px 1.5px 2px;
    border-radius: 10px 50px / 50px 10px;
    display: flex;
    padding-left: 10px;
    padding-top: 10px;
    margin-top: 10px;
    min-height: 20vh;
    margin-right: 10px;
  }
}

.hand-tabs-title-background {
  color: white;
  border-radius: 10% 50%/50% 10%;
  background: linear-gradient(63deg, #535151 23%, transparent 23%) 7px 0,
  linear-gradient(63deg, transparent 74%, #535151 78%),
  linear-gradient(63deg, transparent 34%, #535151 38%, #5c5a5a 58%, transparent 62%),
  #262626;
  background-size: 16px 16px;
}
</style>