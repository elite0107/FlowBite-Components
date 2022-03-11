<template>
  <div>
    <div class="flex items-center mb-4">
      <Button class="mr-2">Default</Button>
      <Button type="alternative" class="mr-2" size="xs">Alternative</Button>
      <Button type="dark" class="mr-2" size="sm">Dark</Button>
      <Button type="light" class="mr-2">Light</Button>
      <Button type="green" class="mr-2" size="lg">Green</Button>
      <Button type="red" class="mr-2" size="xl">Red</Button>
      <Button type="yellow" class="mr-2" :icon="true" size="sm">Yellow</Button>
      <Button type="purple" class="mr-2" :icon="true" size="lg">Purple</Button>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <CardButton
        title="Create New Component"
        description="Choose a template and start drafting your contract."
      />
      <CardButton
        title="Create New Component"
        description="Choose a template and start drafting your contract."
      />
      <CardButton
        type="upload"
        title="Upload Contract"
        description="Upload or drag and drop your existing template and start editing."
      />
      <CardButton
        type="upload"
        title="Upload Contract"
        description="Upload or drag and drop your existing template and start editing."
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/OriginComponents/Button.vue';
import CardButton from '@/components/CustomComponents/Buttons/CardButton.vue';

export default {
  name: "ButtonsPage",
  components: { Button, CardButton }
}
</script>

<style scoped>

</style>