<template>
  <div class="photo-info">
    <h1>Photo Details Page</h1>
    <img :src="photo.download_url" alt="" class="img" />
    <p>
      Author: {{ photo.author }}
    </p>

<div class="links">
  <nuxt-link to="/">Home Page</nuxt-link>
    <nuxt-link to="/about">About Page</nuxt-link>
    <nuxt-link to="/photos">Photos Page</nuxt-link>
</div>
  </div>
</template>

<script>
export default {
  middleware:'auth',
  async asyncData({ $axios, params }) {
      const photo = await $axios.$get(`https://picsum.photos/id/${params.id}/info`);

      return { photo };
   }
};
</script>

<style scoped>
  .photo-info {
    width: 860px;
    margin: 0 auto;
    text-align: center;
  }
  .img {
    width: 100%;
  }

  .link {
    display: inline-block;
    margin-top: 2em;
  }

  .links {
    margin: 0 0.5em;
  }


</style>