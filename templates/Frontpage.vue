<template>
  <div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
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
}
</script>

<style></style>
