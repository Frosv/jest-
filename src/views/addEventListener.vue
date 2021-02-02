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
      window.addEventListener('test',() =>{
        console.log(123)
      })
    }
  }
}
</script>
