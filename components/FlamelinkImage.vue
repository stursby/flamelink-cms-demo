<template>
  <img v-if="url" :src="url" :alt="alt">
</template>

<script>
import app from '~/plugins/flamelink'

export default {
  props: ['id', 'alt'],

  data() {
    return {
      url: ''
    }
  },

  async mounted() {
    try {
      const url = await app.storage.getURL(this.id)
      this.url = url
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
