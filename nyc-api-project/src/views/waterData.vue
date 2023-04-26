<template>
  <chartThing />
</template>

<script>
import chartThing from '../components/chartThing.vue'
export default {
  data() {
    return {
      components: { chartThing },
      thingy: {}
    }
  },

  mounted: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      let res = await fetch(`https://data.cityofnewyork.us/resource/ia2d-e54m.json/`)
      let data = await res.json()
      this.thingy = data
    }
  }
}
</script>

<style lang="scss" scoped></style>
