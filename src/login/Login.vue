<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="content">
        <h2 class="subtitle">
          LOGIN FORM
        </h2>
        <div class="box">
          <h4 class="is-4">
            Enter your priority code:
          </h4>
          <form novalidate>
            <b-field label>Priority Code
              <b-input placeholder="Code" size="default" expanded=true>

              </b-input>
            </b-field>
            <!-- <selected-country /> -->
            <div class="space"></div>
            <div class="control">
              <router-link to="/details" class="button is-primary">Submit</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
