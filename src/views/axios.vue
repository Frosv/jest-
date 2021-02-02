<template>
  <div>axios</div>
</template>

<script>
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // get
      this.$http.get('/roles/getPersonnelInfoRoles', {
        params: {
          key: 'value'
        }
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
