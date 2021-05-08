<template>
  <div>
    <h1>hey world</h1>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  mounted() {
    console.log('blogs: ', this.story)
  },
}
</script>

<style></style>
