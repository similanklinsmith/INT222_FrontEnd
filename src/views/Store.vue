<template>
  <div class="store">
    <div class="stores-section">
      <div class="container">
        <div class="store-header">
          <div class="image-slide-show">
            <img :src="slotImages[cursor - 1].imgSrc" alt="" />
          </div>
          <div class="store-header-text">
            <div class="sub-heading">Choose your match</div>
            <div class="secondary-header">Nerdy Store</div>
          </div>
          <div class="slide-nav grid grid--3-cols">
            <div
              class="nav"
              :style="slotImages[0].show ? { backgroundColor: '#eb435f' } : {}"
              @click="changeImage(1)"
            ></div>
            <div
              class="nav"
              :style="slotImages[1].show ? { backgroundColor: '#eb435f' } : {}"
              @click="changeImage(2)"
            ></div>
            <div
              class="nav"
              :style="slotImages[2].show ? { backgroundColor: '#eb435f' } : {}"
              @click="changeImage(3)"
            ></div>
          </div>
          <div class="big-circle"></div>
          <div class="small-circle"></div>
        </div>

        <div class="show-box">
          <div class="box-header-text">
            Our online store is open
          </div>
          <div class="box-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id totam
            soluta obcaecati consequuntur aliquam doloribus quam nostrum
            perferendis sunt enim.
          </div>
          <div class="app-button">
            <a href="#" class="btn btn--ghost">Read more</a>
          </div>
        </div>
        <div class="promotions">
          <div class="promotion grid grid--3-cols">
            <div class="box">
              <i class="icon fas fa-dolly"></i>
              <div class="sub-heading">Free delivery all orders</div>
            </div>
            <div class="box">
              <i class="icon fas fa-tag"></i>
              <div class="sub-heading">Get 30% off your first purchase</div>
            </div>
            <div class="box">
              <i class="icon fas fa-comment-alt"></i>
              <div class="sub-heading">Customer service 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-clothes">
      <div class="container">
        <div class="sub-heading">match your style</div>
        <div class="secondary-header">Clothes</div>
        <div class="filters-clothes">
          <div class="filter">
            <div class="text-filter">
              <label for="brands">BRAND</label>
              <select name="brands" id="brands" v-model="selectedBrand">
                <option value="">none</option>
                <option value="ZARA">ZARA</option>
                <option value="H&amp;M">H&amp;M</option>
                <option value="UNIQLO">UNIQLO</option>
                <option value="CCOO">CC-OO</option>
              </select>
            </div>
            <div class="text-filter">
              <label for="colors">COLOR</label>
              <select name="colors" id="colors" v-model="selectedColor">
                <option value="">none</option>
                <option :value="color" v-for="color in colors" :key="color">{{ color.color_name }}</option>
                <!-- <option value="colors.color_code">{{colors.color_name}}</option> -->
              </select>
            </div>
            <div class="text-filter">
              <label for="product-types">PRODUCT TYPE</label>
              <select name="product-types" id="product-types">
                <option value="">none</option>
                <option value="ZARA">ZARA</option>
                <option value="H&amp;M">H&amp;M</option>
                <option value="UNIQLO">UNIQLO</option>
                <option value="CCOO">CC-OO</option>
              </select>
            </div>
          </div>
          <div class="search">
            <label for="search">SEARCH</label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="my style"
              v-model="searchInput"
            />
          </div>
        </div>
        <div class="card-grid grid grid--4-cols">
          <router-link to="/add-product" class="add-product">
            <i class="fas fa-plus-square"></i>
          </router-link>
          <!-- component -->
          <transition-group name="slide-fade">
            <Card
              v-for="product in queryProducts"
              :key="product.id"
              :product="product"
              @deleteProduct="handleDelete"
              @toggleWishList="addWishList(product)"
              :style="
                product.isWishList == true
                  ? { color: '#eb435f' }
                  : { color: 'grey' }
              "
            ></Card>
            <div class="not-found" v-if="queryProducts.length == 0">
              <span>{{ searchInput }}</span> is Not found
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <router-link to="/add-product" class="float-add-product">
      <i class="fas fa-plus"></i>
    </router-link>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Stores",
  components: {
    Socials,
    Footer,
    Card,
  },
  data() {
    return {
      productUrl: "http://localhost:3000/products",
      urlColors: "http://localhost:3000/colors",
      products: [],
      colors:[],
      searchInput: "",
      selectColorProduct: [],
      selectedBrand: "",
      selectedColor: [],
      cursor: 1,
      slotImages: [
        {
          imgSrc: require("../../src/assets/images/section-new-header-change-1.jpg"),
          show: true,
          id: 1,
        },
        {
          imgSrc: require("../../src/assets/images/section-new-header-change-2.jpg"),
          show: false,
          id: 2,
        },
        {
          imgSrc: require("../../src/assets/images/section-new-header-change-3.jpg"),
          show: false,
          id: 3,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getProductsToStore"]),
    handleDelete(id) {
      this.products = this.products.filter((product) => {
        return product.id != id;
      });
    },
    addWishList(product) {
      for (let index = 0; index < this.getAllproducts.length; index++) {
        if (this.getAllproducts[index].id == product.id) {
          this.getAllproducts[index].isWishList = !this.getAllproducts[index].isWishList;
          this.$store.dispatch("setProductWishList", product)
        }
      }
    },
    changeImage(id) {
      for (let index = 0; index < this.slotImages.length; index++) {
        if (this.slotImages[index].show === true) {
          this.slotImages[index].show = false;
        }
      }
      this.cursor = id;
      this.slotImages[this.cursor - 1].show = true;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    // this.products = this.$store.dispatch('getProductsToStore');
    fetch(this.productUrl)
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
    fetch(this.urlColors)
      .then((res) => res.json())
      .then((data) => (this.colors = data))
      .catch((err) => console.log(err.message));
  },
  computed: mapGetters(["getProducts"]),
  computed: {
    getAllproducts(){
      return this.$store.getters.getProducts
    },
    queryProducts() {
      // console.log(this.selectedColor)
      return this.getAllproducts.filter((product) => {
        return (
          product.product_brand
            .toLowerCase()
            .includes(this.selectedBrand.toLowerCase()) &&
          product.product_name.toLowerCase().includes(this.searchInput)
          // (product.colors == this.selectedColor)
        );
      });
    },
    queryColors() {
      for (let index = 0; index < this.products.length; index++) {
        for (let i = 0; i < this.products[index].colors.length; i++) {
          if (this.products[index].colors[i].color_code == this.selectedColor) {
            this.selectColorProduct.push(this.products[index]);
          }
        }
      }
      return this.selectColorProduct;
    },
  },
};
</script>
<style scoped>
.float-add-product {
  display: none;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 999;
  color: #fff;
  background-color: #eb435f;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.float-add-product .fa-plus {
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.4rem;
}
.stores-section {
  margin: 2.4rem 0 6.4rem 0;
}

.store-header {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.store-header img {
  width: 100%;
  height: 48rem;
  object-fit: cover;
  filter: brightness(0.9);
  transition: 0.3s all ease-in-out;
}

.store-header img:hover {
  transform: scale(1.025);
}

.stores-section .sub-heading {
  word-spacing: 0.4rem;
  letter-spacing: 0.4rem;
  text-align: center;
  color: #fff;
}

.stores-section .secondary-header {
  text-align: center;
  color: #fff;
}

.store-header-text {
  position: absolute;
  top: 75%;
  text-align: center;
  width: 100%;
}

.store-header .big-circle {
  right: -20% !important;
}

.store-header .small-circle {
  left: -25% !important;
}

.slide-nav {
  width: 10%;
  margin: 0 45%;
  position: absolute;
  transform: translateY(-2rem);
}

.slide-nav.grid {
  column-gap: 0.2rem;
}

.slide-nav .nav {
  width: 100%;
  height: 0.4rem;
  border: 1px solid #eb435f;
  cursor: pointer;
}

.promotions {
  width: 100%;
  text-align: center;
  justify-items: center;
  margin: 4.8rem 0;
}

.promotions .icon {
  font-size: 2rem;
  color: #6e6e6e;
  justify-self: center;
  align-self: center;
}

.promotion {
  justify-items: center;
}

.promotion.grid {
  column-gap: 0;
}

.box {
  width: 100%;
  height: 10rem;
  padding: 2.4rem 0;
  /* background-color: white; */
  border-right: 1px solid rgba(51, 51, 51, 0.25);
}

.box:last-child {
  border-right: none;
}

.box .sub-heading {
  width: 60%;
  margin: 1.2rem 20% 0 20%;
  letter-spacing: 0.4rem;
  word-spacing: 0.4rem;
  color: #555;
  font-size: 1.2rem;
  line-height: 1.4;
}

.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn--full:link,
.btn--full:visited {
  margin-right: 2.4rem;
  background-color: #eb435f;
  color: white;
  transition: 0.3s all ease-in-out;
}

.btn--full:hover,
.btn--full:active {
  background-color: #bc364c;
}

.btn--ghost:link,
.btn--ghost:visited {
  box-shadow: inset 0 0 0 1px #eb435f;
  color: #eb435f;
  transition: 0.3s all ease-in-out;
}

.btn--ghost:hover,
.btn--ghost:active {
  background-color: #bc364c;
  color: #e7e3e0;
  box-shadow: none;
}

.show-box {
  width: 100%;
  background-color: #eb435f;
  padding: 4.8rem 2.4rem;
  margin: 1.2rem 0;
}

.app-button {
  text-align: center;
}

.show-box .logo {
  display: inline;
}

.show-box .logo span {
  color: #eb435f;
}

.box-header-text {
  text-align: center;
  font-size: 2.4rem;
  color: #fff;
  font-weight: 500;
}

.show-box .box-text {
  font-size: 1.8rem;
  text-align: center;
  width: 70%;
  margin: 1.2rem 15% 2.4rem 15%;
  line-height: 1.2;
  color: #fff;
  font-weight: 300;
}

.show-box .sub-heading {
  text-align: center;
  color: white;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
}

.app-button .btn--ghost:link,
.app-button .btn--ghost:visited {
  font-size: 1.4rem;
  width: 16rem;
  box-shadow: inset 0 0 0 1px #e7e3e0;
  color: #e7e3e0;
  transition: 0.3s all ease-in-out;
}

.app-button .btn--ghost:hover,
.app-button .btn--ghost:active {
  box-shadow: none;
  color: #e7e3e0;
  transition: 0.3s all ease-in-out;
}

.filters-clothes {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4.8rem;
  margin: 3.6rem 0;
  /* width: auto;
  justify-content: space-between;
  margin: 3.6rem 0; */
}

.filter {
  display: flex;
  gap: 3.6rem;
}

.text-filter,
.search {
  width: auto;
  font-size: 1.2rem;
  color: #555;
}

.text-filter label,
.search label {
  margin-right: 1.2rem;
  font-weight: 700;
}

.search {
  display: flex;
  align-items: center;
  justify-self: end;
}

.search input {
  padding: 0.2rem 0.4rem;
  color: #555;
  border: none;
  background-color: rgb(240, 240, 240);
  width: 24rem;
}

.search input:focus {
  outline: none;
}

.search input::placeholder {
  color: rgb(85, 85, 85, 0.35);
}

.card-grid.grid {
  column-gap: 1.6rem;
}

.add-product {
  width: 100%;
  height: 43.6rem;
  background-color: transparent;
  border: 2px dashed rgb(85, 85, 85);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  color: #555;
}

.fa-plus-square {
  width: 4.8rem;
  height: 4.8rem;
  color: inherit;
}

.add-product:hover {
  opacity: 1;
  background-color: rgba(110, 110, 110, 0.15);
  border: 2px dashed #fff;
  color: white;
}

.not-found {
  font-size: 1.8rem;
  color: rgba(84, 84, 84, 0.55);
  align-self: center;
  width: 80%;
  margin: 0 10%;
}

.not-found span {
  font-size: 2.4rem;
  font-weight: 700;
  color: #eb435f;
}

/* below 925px */
@media (max-width: 58em) {
  .filters-clothes {
    grid-template-columns: 1fr;
    row-gap: 3.2rem;
  }
  .text-filter,
  .search {
    justify-self: start;
  }
  .card-grid.grid--4-cols {
    grid-template-columns: repeat(3, 1fr);
  }
  .card-grid.grid {
    row-gap: 4.8rem;
  }
}

/* below 816px */
@media (max-width: 51em) {
  .show-box .box-text {
    font-size: 1.6rem;
    width: 100%;
    margin: 1.2rem 0 2.4rem 0;
  }
  .box .sub-heading {
    width: 80%;
    margin: 1.2rem 10% 0 10%;
    font-size: 1rem;
  }
}

/* below 700px */
@media (max-width: 44em) {
  .store-header img {
    height: 36rem;
  }
  .store-header-text .secondary-header {
    margin: 1rem 0 1rem 0;
    font-size: 3.2rem;
  }
  .store-header-text .sub-heading {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  .box-header-text {
    font-size: 2rem;
  }
  .show-box {
    width: 100%;
    background-color: #eb435f;
    padding: 3.6rem 1.8rem;
    margin: 1.2rem 0;
  }
}

/* below 690px */
@media (max-width: 43em) {
  .box {
    padding: 1.4rem 1rem;
  }
  .box .sub-heading {
    width: 100%;
    margin: 1.2rem 0 0 0;
  }
  .promotions .icon {
    font-size: 1.4rem;
  }
  .filter {
    gap: 1.2rem;
  }
  .slide-nav {
    width: 20%;
    margin: 0 40%;
  }
}

/* below 577px */
@media (max-width: 36em) {
  .text-filter,
  .search {
    font-size: 1rem;
  }
  .card-grid.grid--4-cols {
    grid-template-columns: repeat(2, 1fr);
  }
  .show-box .box-text {
    font-size: 1.4rem;
    width: 90%;
    margin: 1.2rem 5% 2.4rem 5%;
  }
  .stores-section {
    margin: 2.4rem 0 3.6rem 0;
  }
  .section {
    margin-top: 5.2rem;
  }
  .filters-clothes {
    row-gap: 1.8rem;
  }
  .filter {
    flex-wrap: wrap;
  }
}

/* below 470px */
@media (max-width: 29em) {
  .float-add-product {
    display: inline;
  }
  .card-grid.grid--4-cols {
    grid-template-columns: 1fr 1fr;
  }
  .slide-nav {
    width: 30%;
    margin: 0 35%;
  }
  .promotion.grid--3-cols {
    grid-template-columns: 1fr;
  }
  .promotion.grid {
    row-gap: 1.4rem;
  }
  .box {
    width: 80%;
    height: auto;
    border-right: none;
  }
  .box .sub-heading {
    width: 60%;
    margin: 1.2rem 20% 0 20%;
  }
  .store-header-text .secondary-header {
    font-size: 2.4rem;
  }
  .store-header-text .sub-heading {
    font-size: 1rem;
  }
  .add-product {
    display: none;
  }
}

/* below 375px */
@media (max-width: 24em) {
  .promotion.grid {
    row-gap: 2.4rem;
  }
  .box .sub-heading {
    width: 75%;
    margin: 1.2rem 12.5% 0 12.5%;
    font-size: 0.8rem;
  }
  .card-grid.grid--4-cols {
    grid-template-columns: 1fr;
  }
  .not-found {
    text-align: center;
  }
}
</style>
