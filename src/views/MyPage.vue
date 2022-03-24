<template>
  <div class="mt-3">
    <InstructorIndex></InstructorIndex>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    created() {
      this.returnNormal()
    },
    methods: {
      ...mapMutations(['returnNormal'])
    },
  }
</script>
<style lang="sass">

</style>