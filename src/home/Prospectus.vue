<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="content">
        <h1 class="title is-spaced">Calix Limited<br>Initial Public Offering</h1>
        <h2 class="subtitle">
            The Initial Public Offering ("Offer") is only being made to persons,
            who have a registered address in Australia
        </h2>
        <div class="box">
          <p>
            Due to legal restrictions, access to this webpage is only intended
            for access by persons within Australia. This webpage does not
            constitute an offer of securities in any place in which,
            or to any person to whom, it would not be lawful to make such an offer.
          </p>
          <form novalidate>
            <b-field label>Country of Primary Residence
              <b-select placeholder="Country" icon="earth" size="default" expanded=true>
                <option>

                </option>
              </b-select>
            </b-field>
            <div class="space"></div>
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
};
</script>
