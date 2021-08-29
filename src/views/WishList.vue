<template>
  <div class="section section-wish-list">
    <div class="container">
      <div class="sub-heading">wishing</div>
      <div class="secondary-header">Wish List</div>
      <div class="card-grid grid grid--4-cols">
        <!-- component -->
        <transition-group name="slide-fade">
          <Card
            v-for="product in queryWishList"
            :key="product.id"
            :product="product"
            @toggleWishList="addWishList(product)"
            :style="
              product.isWishList == true
                ? { color: '#eb435f' }
                : { color: 'grey' }
            "
          ></Card>
          <div class="no-wishlist" v-if="queryWishList.length == 0">
            you have not selected any products yet :|
            <div class="empty-wishlist">
              <img src="../../src/assets/images/empty-wishlist.png" alt="" />
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
export default {
  name: "WishList",
  components: {
    Socials,
    Footer,
    Card,
  },
  data() {
    return {
      // productUrl: "http://localhost:3000/products",
      // products: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    // fetch(this.productUrl)
    //   .then((res) => res.json())
    //   .then((data) => (this.products = data))
    //   .catch((err) => console.log(err.message));
  },
  methods: {
    addWishList(product) {
      for (let index = 0; index < this.getAllproducts.length; index++) {
        if (this.getAllproducts[index].id == product.id) {
          this.getAllproducts[index].isWishList = !this.getAllproducts[index].isWishList;
          this.$store.dispatch("setProductWishList", product)
        }
      }
    },
  },
  computed: {
    getAllproducts(){
      return this.$store.getters.getProducts
    },
    queryWishList() {
      return this.getAllproducts.filter((product) => {
        return product.isWishList;
      });
    },
  },
};
</script>
<style scoped>
.section-wish-list {
  margin: 2.4rem 0 6.4rem 0;
}
/* .container{
  padding: 3.6rem 3.2rem;
} */
.card-grid.grid {
  column-gap: 1.6rem;
}
.no-wishlist {
  font-size: 1.8rem;
  color: rgba(84, 84, 84, 0.55);
  align-self: center;
  justify-self: center;
  text-align: center;
  width: 80%;
  margin: 0 10%;
  grid-column: span 4;
  text-transform: uppercase;
  margin-top: 2.4rem;
  line-height: 1.6;
}
.empty-wishlist {
  width: 100%;
}
.empty-wishlist img {
  width: 36rem;
  height: 36rem;
  object-fit: contain;
}

/* below 925px */
@media (max-width: 58em) {
  .card-grid.grid--4-cols {
    grid-template-columns: repeat(3, 1fr);
  }
  .card-grid.grid {
    row-gap: 4.8rem;
  }
  .no-wishlist {
    font-size: 1.4rem;
  }
  .empty-wishlist img {
    width: 28rem;
    height: 28rem;
  }
}
/* below 577px */
@media (max-width: 36em) {
  .card-grid.grid--4-cols {
    grid-template-columns: repeat(2, 1fr);
  }
  .empty-wishlist img {
    width: 24rem;
    height: 24rem;
  }
}
/* below 470px */
@media (max-width: 29em) {
  .card-grid.grid--4-cols {
    grid-template-columns: 1fr 1fr;
  }
}

/* below 375px */
@media (max-width: 24em) {
  .card-grid.grid--4-cols {
    grid-template-columns: 1fr;
  }
}
</style>
