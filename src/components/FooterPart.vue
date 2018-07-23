<template>
  <div>
    <footer class="footer">
      <div class="container is-fluid">
        <div class="content has-text-centered">
          <figure>
            <span class="is-size-6">designed by</span>&nbsp;
            <a href="http://boardroomlimited.com.au" title="Boardroom pty limited">
              <img src="../assets/images/boardroomlimited.png"
              class="image" alt="BoardRoom" border="0" width="114" />
            </a>
          </figure>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterPart',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>


</style>
