<script setup>
async function getdata() {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/f9bf-2cp4.json");
    const nycdoeData = await response.json();
    if (response.status < 200 || response.status > 299) {
      console.log("poop");
    }
    const amiibos = nycdoeData.amiibo;
  } catch (error) {
    console.log(error);
    console.log("big poo");
  }
</script>

<template></template>

<style></style>
