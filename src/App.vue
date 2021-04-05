<template>
  <div :class="classes.root">
    <header :class="classes.header">
      <NavBar>
        <NavBarItem to="/">Home</NavBarItem>
        <NavBarItem to="/all-recipes">All Recipes</NavBarItem>
        <NavBarItem to="/random-recipe">Random Recipe</NavBarItem>
        <NavBarItem to="/new-recipe">New Recipe</NavBarItem>
      </NavBar>
    </header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import NavBar from './components/NavBar/NavBar.vue'
import NavBarItem from './components/NavBar/NavBarItem.vue'


export default defineComponent({
  name: 'App',

  components: {
    NavBar,
    NavBarItem,
  },

  setup () {
    const classes = computed(() => {
      return {
        root: [
          'm-10'
        ],
        header: [
          'flex justify-center text-2xl'
        ]
      }
    })

    return {
      classes,
    }
  }
})
</script>
