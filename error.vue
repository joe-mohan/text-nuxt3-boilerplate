<script setup>
const props = defineProps({
error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <p>ERROR DETAILS: {{ error.statusCode }} {{ error.statusMessage }}</p>
    <p>Error.vue</p>
    <p>{{ error }}</p>
    <button @click="handleError">Clear errors</button>
  </NuxtLayout>
</template>
