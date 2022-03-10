<template>
  <div
    class="p-4 mb-4 text-sm"
    :class="{
      'flex items-center': icon && !title,
      'text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800': type === 'info',
      'text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800': type === 'danger',
      'text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800': type === 'success',
      'text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800': type === 'warning',
      'text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300': type === 'dark'
    }"
    role="alert"
  >
    <div class="flex items-center" v-if="title">
      <svg
        class="mr-2 w-5 h-5"
        :class="{
          'text-blue-700 dark:text-blue-800': type === 'info',
          'text-red-700 dark:text-red-800': type === 'danger',
          'text-green-700 dark:text-green-800': type === 'success',
          'text-yellow-700 dark:text-yellow-800': type === 'warning',
          'text-gray-700 dark:text-gray-300': type === 'dark'
        }"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        v-if="icon"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
          v-if="type === 'success'"
        ></path>

        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
          v-if="type === 'danger'"
        ></path>

        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
          v-if="type === 'info' || type === 'dark' || type === 'warning'"
        ></path>
      </svg>
      <h3
        class="text-lg font-medium"
        :class="{
          'text-blue-700 dark:text-blue-800': type === 'info',
          'text-red-700 dark:text-red-800': type === 'danger',
          'text-green-700 dark:text-green-800': type === 'success',
          'text-yellow-700 dark:text-yellow-800': type === 'warning',
          'text-gray-700 dark:text-gray-300': type === 'dark'
        }"
      >{{title}}</h3>
    </div>
    <svg
      class="flex-shrink-0 w-5 h-5 mr-2"
      :class="{
        'text-blue-700 dark:text-blue-800': type === 'info',
        'text-red-700 dark:text-red-800': type === 'danger',
        'text-green-700 dark:text-green-800': type === 'success',
        'text-yellow-700 dark:text-yellow-800': type === 'warning',
        'text-gray-700 dark:text-gray-300': type === 'dark'
      }"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      v-if="icon"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
        v-if="type === 'success'"
      ></path>

      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clip-rule="evenodd"
        v-if="type === 'danger'"
      ></path>

      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
        v-if="type === 'info' || type === 'dark' || type === 'warning'"
      ></path>
    </svg>
    <span class="font-medium mr-1" v-if="subtitle">{{subtitle}}</span>{{ subtitle || (!subtitle && !title)? message : "" }}
    <div
      class="mt-2 text-sm"
      :class="{
          'text-blue-700 dark:text-blue-800': type === 'info',
          'text-red-700 dark:text-red-800': type === 'danger',
          'text-green-700 dark:text-green-800': type === 'success',
          'text-yellow-700 dark:text-yellow-800': type === 'warning',
          'text-gray-700 dark:text-gray-300': type === 'dark'
        }"
      v-if="title"
    >
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'OriginAlert',
  props: {
    type: {
      type: String,
      required: false,
      default: "success"
    },
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    subtitle: {
      type: String,
      required: false,
      default: undefined
    },
    message: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>

<style scoped>

</style>