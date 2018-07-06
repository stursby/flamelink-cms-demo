<template>
  <div>
    <h1>Flamelink CMS Demo</h1>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }} ${{ product.price }}</h3>
      <flamelink-image
        :id="product.image[0]"
        :alt="`${product.name} product`"
      />
    </div>
  </div>
</template>

<script>
import app from '~/plugins/flamelink'
import FlamelinkImage from '~/components/FlamelinkImage'

export default {
  components: {
    FlamelinkImage
  },

  async asyncData() {
    try {
      const products = await app.content.get('products')
      return { products }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

img {
  max-width: 300px;
}

</style>

