<template>
  <router-link
    v-if="$props.route"
    :to="route"
  >
    <button :class="classes.button">
      <slot />
    </button>
  </router-link>

  <a
    v-else-if="$props.href"
    :href="href"
    target="_blank"
  >
    <button :class="classes.button">
      <slot />
    </button>
  </a>

  <button
    v-else
    :class="classes.button"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'App',

  props: {
    route: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: ''
    },
  },

  setup () {
    const classes = computed(() => {
      return {
        button: [
          'bg-blue-500 px-6 py-4 rounded shadow-md text-white'
        ]
      }
    })

    return {
      classes
    }
  }
})
</script>
