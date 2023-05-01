<template>
  <div>
    <nav>
      <RouterLink to="/apiData">All Data</RouterLink>
      <br />
      <RouterLink to="/BarView">Data About Average Consumption</RouterLink>
      <br />
      <Routerlink to="/pieView"> Data about Population </Routerlink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
nav {
  text-align: center;
  margin-left: 50px;
  border: 1px solid black;
  max-width: 400px;
}
</style>
