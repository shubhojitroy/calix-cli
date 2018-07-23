<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <div class="nav-brand">
          <a class="" href="https://www.calix.com.au/" title="Calix" target="_blank">
            <img src="../assets/images/logo.svg" width="200" height="50" alt="Calix" />
          </a>
        </div>
        <div class="navbar-burger burger is-right" data-target="navbarExampleTransparentExample"
        aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
              <a class="navbar-item">
                &nbsp;
              </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/">Prospectus</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/login">Login</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/details">Details</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/application">Application</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/confirmation">Confirmation</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
