<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center">
    <img
      :src="blok.image.filename"
      class="h-48 w-full mb-4 object-cover"
      alt=""
    />
    {{ blok.headline }}
    <section v-for="blok in blok.columns" :key="blok.uid">
      <component :blok="blok" :is="blok.component" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
      default: '',
    },
  },
  mounted() {
    console.log('teaser: ', this.$props.blok.columns[0])
  },
}
</script>
