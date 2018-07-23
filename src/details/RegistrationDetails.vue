<template>
  <section class="section">
    <div class="container is-full">
      <div class="content">
        <h2 class="subtitle">
          REGISTRATION DETAILS
        </h2>
        <div class="box">
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <h4 class="is-4">
                Entered priority code:
              </h4>
            </div>
            <div class="navbar-end">
              <b-field label>
                priorityCode
              </b-field>
            </div>
          </div>
          <div class="space"></div>
          <div class="navbar-menu  is-active">
            <div class="navbar-start">
              <h4 class="is-4">
                Registered Details of the Holder:
              </h4>
            </div>
            <div class="navbar-end">
              <b-field label>
                NameAddress1<br>
                NameAddress2<br>
                NameAddress3<br>
                NameAddress4<br>
                NameAddress5<br>
                NameAddress6
              </b-field>
            </div>
          </div>
          <hr>
          <div class="notification">
            <h4 class="is-4">
              By clicking 'Next' you are confirming your holding details are correct as above for an
              Application under the Offer
            </h4>
          </div>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <div class="control">
                <router-link to="/login" class="button is-primary">Previous</router-link>
              </div>
            </div>
            <div class="navbar-end">
              <div class="control">
                <router-link to="/application" class="button is-primary">Next</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegistrationDetails',
  props: {
    msg: String,
  },
};
</script>

<style lang='scss' scoped>

</style>
