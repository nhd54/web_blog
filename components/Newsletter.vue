<template>
  <div v-editable="blok" class="py-2">
    <h1 class="text-lg">{{ blok.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
