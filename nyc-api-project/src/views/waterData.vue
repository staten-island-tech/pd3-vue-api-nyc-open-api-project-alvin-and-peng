<template>
  <div>{{ thingy }}</div>
</template>

<script>
export default {
  data() {
    return {
      thingy: {}
    }
  },

  mounted: async function () {
    await this.getWater()
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
