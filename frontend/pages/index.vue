<template>
    <div>
        <h1>index</h1>
    </div>
</template>

<script>
export default {
    data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>