<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.google.com/?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=google-fonts&preview.text=%C3%A0%20la%20recherche%20d%27une%20police%20d%27%C3%A9criture&preview.text_type=custom&preview.size=36&category=Handwriting&sort=popularity');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 0px 20px;
  background-color: navajowhite;
}
</style>
