<template>
  <section>
    <!--  <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    /> -->
    <component :is="template" :story="story" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} },
      type: this.$store.state.type,
    }
  },
  computed: {
    template() {
      switch (this.type) {
        case '/home':
          return 'Frontpage'
        case '/blog':
          return 'Blogs'
      }
    },
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
    console.log(this.story, this.$store)
    this.$store.commit('SET_STORY', this.story)
  },
  async asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
    const { path } = context.route
    const { store } = context
    if (path === '/') {
      store.commit('SET_TYPE', '/home')
    } else {
      store.commit('SET_TYPE', path)
    }

    /*  */
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories${store.state.type}`, {
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  methods: {
    setPageData() {},
  },
}
</script>
