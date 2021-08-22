<template>
  <div class="section section-wish-list">
    <div class="container">
      <div class="sub-heading">wishing</div>
      <div class="secondary-header">Wish List</div>
    </div>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "WishList",
  components:{
      Socials,
      Footer
  }
};
</script>
<style scoped></style>
