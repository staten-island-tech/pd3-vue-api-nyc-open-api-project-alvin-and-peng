<template>
  <div>
    <nav>
      <RouterLink to="/apiData">apiData</RouterLink>
      <RouterLink to="/BarView">BarView</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
.nav {
  text-align: center;
}
</style>
