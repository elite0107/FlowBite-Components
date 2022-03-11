<template>
  <button class="text-blue-400 hover:text-blue-600 underline p-4">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'LinkButton' 
}
</script>