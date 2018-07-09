<template>
  <div>
    <h1>Flamelink CMS Demo</h1>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }} ${{ product.price }}</h3>
      <img :src="product.image[0].url" :alt="`${product.name} product`">
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    try {
      const products = await app.flamelink.content.get('products', {
        populate: ['image']
      })
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

