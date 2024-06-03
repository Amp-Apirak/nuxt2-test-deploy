<template>
  <form @submit="onSubmit">
    <input v-model="email" type="email" />
    <input v-model="password" type="password" />

    <button type="submit">Login</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }

      try {
        await this.$auth.loginWith('local', { data: payload })
      } catch (error) {
        this.error = 'Login failed. Please check your credentials.' // แสดงข้อความข้อผิดพลาดในหน้าเว็บ
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
