<template>
  <div :class="classes.root">
    <h1 :class="classes.title">The Recipe Decider App</h1>
    <div :class="classes.buttonsContainer">
      <Button route="/new-recipe">New Recipe</Button>
      <Button route="/random-recipe">Randomized Recipe</Button>
      <Button route="/all-recipes">See All Recipes</Button>
      <Button href="https://www.gamespot.com">Test External</Button>
      <Button @click="test">Just click</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import Button from '../components/Button/Button.vue'

export default defineComponent({
  name: 'Home',

  components: {
    Button,
  },

  setup () {
    const classes = computed(() => {
      return {
        root: [
          'flex justify-center items-center flex-col h-screen'
        ],
        title: [
          'text-4xl font-bold'
        ],
        buttonsContainer: [
          'flex justify-around w-1/2 m-10'
        ],
      }
    })

    const test = () => {
      alert('testing!')
    }

    return {
      classes,
      test,
    }
  }
})
</script>
