<script setup lang="ts">
import {computed, PropType} from "vue"

const props = defineProps({
  label: String,
  small: Boolean,
  outlined: Boolean,
})

const buttonClasses = computed(() => {
  let defaultClasses = "rounded overflow-hidden"
  if (props.small) {
    defaultClasses = `${defaultClasses} px-2 py-1`
  } else {
    defaultClasses = `${defaultClasses} px-10 py-3`
  }
  if (props.outlined) {
    defaultClasses = `${defaultClasses} text-black border-2 border-black`
  } else {
    defaultClasses = `${defaultClasses} text-white bg-orange-500 border-2 border-transparent`
  }
  return defaultClasses
})
</script>

<template>
  <button :class="buttonClasses" v-bind="$attrs">{{ label }}</button>
</template>