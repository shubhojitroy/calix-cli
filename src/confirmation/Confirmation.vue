<template>
  <section class="section">
    <div class="container is-full">
      <div class="content">
        <h2 class="subtitle">
          CONFIRMATION AND PAYMENT INSTRUCTIONS
        </h2>
        <div class="box">
          <p class="subtitle is-6">
            You should submit your BPAY payment immediately using
            the Biller Code and Reference provided below.
            The time of your application will be the time at which the
            Registry has received both your valid online Application
            and your BPAY payment.
          </p>
          <div class="notification">
            Your application monies must be received by
            BPAY on Tuesday, 14<sup>th</sup> August 2018
            before 5:00pm (Sydney time).
          </div>
          <h4 class="is-4">
            Applicant's Details
          </h4>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <h4 class="is-4">
                Priority Code:
              </h4>
            </div>
            <div class="navbar-end">
              <b-field label>
                {{ ApplicationSRN }}
              </b-field>
            </div>
          </div>
          <div class="space"></div>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <h4 class="is-4">
                Holder Details:
              </h4>
            </div>
            <div class="navbar-end">
              <b-field label>
                {{ NameAddress1 }}<br>
                {{ NameAddress2 }}<br>
                {{ NameAddress3 }}<br>
                {{ NameAddress4 }}<br>
                {{ NameAddress5 }}<br>
                {{ NameAddress6 }}
              </b-field>
            </div>
          </div>
          <span class="confirm">Number of units applied for:</span>
          <span class="prominent">{{ unitsApplied }}</span>
          <div class="space"></div>
          <span class="confirm">Application Payment Amount:</span>
          <span class="prominent">{{ appAmount }}</span>
          <hr>
          <img src="../assets/images/bpay.png" alt="bpay" />
          <div class="space"></div>
          <span class="confirm">Biller Code:</span>
          <span class="prominent">{{ BPayBillerCode }}</span>
          <div class="space"></div>
          <span class="confirm">Ref:</span>
          <span class="prominent">{{ RefNumber }}</span>
          <div class="space"></div>
          <p class="subtitle is-6">Telephone & Internet Banking - BPAY&#174;</p>
          <p class="subtitle is-6">
            Contact your bank or financial institution to make this payment from your cheque, savings, debit or transaction
            account. More info: <a href="http://www.bpay.com.au" target="_blank">www.bpay.com.au</a>
          </p>
          <p class="subtitle is-6">
            <b>Application Payment must be received by the Registry by BPAY&#174; by 5:00pm (Sydney time) on Tuesday, 14<sup>th</sup> August 2018.</b>
          </p>
          <p class="subtitle is-6">
            You should check the processing cut-off time for BPAY&#174; transactions with your bank, credit union or building society to ensure your payment will be received by the Registry in time.
          </p>
          <div class="navbar-menu is-active">
            <div class="navbar-start">
              <div class="control">
                <button class="button is-primary">Print</button>
              </div>
            </div>
            <div class="navbar-end">
              <div class="control">
                <button class="button is-primary">Close</button>
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
  name: 'ConfirmationPage',
};
</script>

<style lang='scss' scoped>

</style>
