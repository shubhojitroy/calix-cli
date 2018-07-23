<template>
  <div id="app">
    <div class="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <navigation />
    </div>
    <main>
      <router-view/>
    </main>
    <footer-part />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import FooterPart from '@/components/FooterPart.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    FooterPart,
  },
};
</script>

<style lang="scss">
@import '../src/assets/styles/style.scss';
</style>
