<template>
  <button class="py-3 px-6 border border-gray-200 rounded-lg flex bg-white hover:border-gray-250 hover:bg-gray-50">
    <span class="text-blue-700 mr-4" v-if="type === 'create'">
      <svg
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </span>
    <span class="text-green-700 mr-4" v-if="type === 'upload'">
      <svg
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
      </svg>
    </span>
    <div flex="flex flex-col">
      <span class="font-bold text-black block text-left text-lg mb-4">
        {{title}}
      </span>
      <span class="text-gray-500 block text-left">
        {{description}}
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: "CardButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "create"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    }
  }
}
</script>