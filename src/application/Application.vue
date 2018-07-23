<template>
  <section class="section">
    <div class="container is-full">
      <div class="content">
        <h2 class="subtitle">
          EQUITY RAISING APPLICATION FORM
        </h2>
        <div class="box">
          <p class="subtitle is-6">
            This Application Form has been issued by Moelis Australia Asset Management Ltd (ACN 142 008 535, AFSL 427 515) (Trustee) as trustee of the Moelis Australia Hotel Trust I and the Moelis Australia Hotel Trust II in respect of the Offer
          </p>
          <p class="subtitle is-6">
            The Offer is being made in, and accompanied by, a copy of the Presentation which contains information about investing. Persons eligible to apply must apply online or, if applicable, contact their adviser to submit an Application Form.
          </p>
          <p class="subtitle is-6">
            You should read the Presentation in full before making an application.
          </p>
          <p class="subtitle is-6">
            By completing this Application Form and making a payment by BPAY® pursuant to this Application Form, you make the declarations set out in this Application Form.
          </p>
          <p class="subtitle is-6">
            This Application Form is only available to persons within Australia. The Presentation contains information relevant to a decision to invest in the Fund and you should read the entire Presentation carefully before applying.
          </p>
          <form novalidate>
            <b-field label>Stapled Securities applied for:
              <b-input placeholder="Units applied for" size="default" expanded=true>
              </b-input>
            </b-field>
            <b-field label>Issue price per Stapled Security:
              <b-input placeholder="Issue price" size="default" expanded=true>
              </b-input>
            </b-field>
            <b-field label>Application Payment based on number of Stapled Securities applied for:
              <b-input placeholder="Application Payment" size="default" expanded=true>
              </b-input>
            </b-field>
            <hr>
            <p class="subtitle is-6">
              In order to obtain payment instructions to complete your Application, please click on the Submit button. This will take you to a confirmation page and provide BPAY payment details.
            </p>
            <p class="subtitle is-6">
              If you would like more information or have any questions relating to the Offer Capital Raising, you can contact the Moelis Australia Asset Management on 1800&nbsp;634&nbsp;850 (within Australia) or +61&nbsp;2&nbsp;9290&nbsp;9681 (outside Australia) between 8:15am and 5:30pm (Melbourne time) Monday to Friday.
            </p>
            <div class="navbar-menu is-active">
              <div class="navbar-start">
                <div class="control">
                  <router-link to="/details" class="button is-primary">Previous</router-link>
                </div>
              </div>
              <div class="navbar-end">
                <div class="control">
                  <router-link to="/confirmation" class="button is-primary">Next</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApplicationPage',
  props: {
    msg: String,
  },

};
</script>

<style lang='scss' scoped>

</style>
