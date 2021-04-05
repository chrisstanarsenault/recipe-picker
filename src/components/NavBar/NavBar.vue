<template>
  <nav :class="classes.root">
    <slot/>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'App',

  setup () {
    const classes = computed(() => {
      return {
        root: [
          'flex justify-between w-3/5'
        ]
      }
    })

    return {
      classes
    }
  }
})
</script>
