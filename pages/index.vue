<template>
  <div>
    <h1>Home Page</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam
      illum nisi assumenda est quo cum voluptatibus esse dolor reiciendis.
      Dolores harum ducimus quidem consequatur, tempore asperiores! Quidem,
      earum cum.
    </p>

    <div class="links">
      <nuxt-link to="/about">About Page</nuxt-link>
      <nuxt-link to="/photos">Photos Page</nuxt-link>
    </div>

    <div class="links mx-5">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>
<script>
export default {
  middleware:'auth',
  methods:{
    async  logout(e){
      await this.$auth.logout()
      this.$router.push('/login')
    },
  }
}
</script>

<style>
.links a {
  margin: 0 0.5rem;
}
</style>
