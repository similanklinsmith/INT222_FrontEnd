<template>
  <div class="AddProduct">
    <div class="add-product-section">
      <div class="container">
        <!-- component -->
        <!-- <Form :colors="colors"></Form> -->
        <!-- --- -->
        <div class="Form">
          <div>
            <div class="sub-heading">more &amp; more</div>
            <div class="secondary-header">Add product</div>
          </div>

          <form @submit.prevent="addProduct" action="#" class="form">
            <!-- component -->
            <div class="display-img">
              <label class="add-img" for="upload" v-if="preview_img == ''">
                <input
                  @change="uploadImage"
                  type="file"
                  accept="image/*"
                  id="upload"
                  name="upload"
                />
                <i class="fas fa-plus-square"></i>
              </label>
              
              <img :src="preview_img" alt="" v-else />
              <div class="img-name" v-if="name_img != ''">{{ name_img }} <span @click="changeImg"><i class="fas fa-times"></i></span></div>
            </div>

            <div class="info-form">
              <div class="col-left">
                <div class="prod-name">
                  <label for="name">Product name</label>
                  <input
                    type="text"
                    v-model="prod_name"
                    placeholder="Fits T-shirt"
                  />
                </div>
                <div class="prod-desc">
                  <label for="desc">Description</label>
                  <textarea
                    name="desc"
                    id="desc"
                    v-model="prod_desc"
                    cols="30"
                    rows="10"
                    placeholder="This shirt is made up with finess silks..."
                  ></textarea>
                </div>
                <div class="prod-price">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    v-model.number="prod_price"
                    placeholder="599"
                  />
                </div>
                <div class="prod-brand-type">
                  <div class="prod-brand">
                    <label for="brands">Brand</label>
                    <select name="brands" id="brands" v-model="prod_brands">
                      <option value="">none</option>
                      <option value="ZARA">ZARA</option>
                      <option value="H&amp;M">H&amp;M</option>
                      <option value="UNIQLO">UNIQLO</option>
                      <option value="CCOO">CC-OO</option>
                    </select>
                  </div>

                  <div class="prod-type">
                    <label for="types">Type</label>
                    <select name="types" id="types" v-model="prod_types">
                      <option value="">none</option>
                      <option value="Shirt">Shirt</option>
                      <option value="Pants">Pants</option>
                      <option value="Jeans">Jeans</option>
                      <option value="Sweater">Sweater</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-right">
                <div class="prod-date">
                  <label for="date">Manufactured date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    v-model="prod_date"
                  />
                </div>
                <div class="prod-colors">
                  <label for="name">Colors</label>
                  <div class="list-of-colors">
                    <input
                      class="checkbox"
                      type="checkbox"
                      v-for="color in allColors"
                      :key="color.color_code"
                      v-model="selected_colors"
                      :value="color"
                      :style="{ backgroundColor: color.color_code }"
                    />
                  </div>
                </div>
                <button class="btn btn--full" type="submit">
                  Add product
                </button>
              </div>
            </div>
            <!-- ----- -->
          </form>
        </div>
      </div>
    </div>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapActions } from 'vuex';
// import Form from "@/components/Form.vue";
export default {
  components: {
    Socials,
    Footer,
    // Form,
  },
  data() {
    return {
      urlColors: "http://localhost:3000/colors",
      // urlProducts: "http://localhost:3000/products",
      // color list
      // colors: [],
      //add product
      product_img: "",
      prod_name: "",
      prod_desc: "",
      prod_price: null,
      prod_brands: "",
      prod_types: "",
      prod_date: "",
      selected_colors: [],
      prod_img: "",
      //preview image
      preview_img: "",
      name_img:""
    };
  },
  computed: mapGetters(["getColors"]),
  computed: {
    addColor() {
      for (let index = 0; index < this.selected_color.length; index++) {
        this.prod_color.push({
          color_code: this.selected_color[index],
          color_name: this.selected_color[index],
        });
      }
    },
    allColors(){
      return this.$store.getters.getColors
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    fetch(this.urlColors)
      .then((res) => res.json())
      .then((data) => (this.colors = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    ...mapActions(["getColorToStore"]),
    uploadImage(e) {
      const image = e.target.files[0];
      this.name_img = image.name;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.preview_img = e.target.result;
        this.prod_img = e.target.result;
      };
    },
    addProduct() {
      const newProduct = {
        product_name: this.prod_name, 
        product_desc: this.prod_desc, 
        product_price: this.prod_price, 
        product_brand: this.prod_brands, 
        product_type: this.prod_types, 
        date: this.prod_date, 
        colors: this.selected_colors, 
        isWishList: false, 
        product_img: this.prod_img,
      };
      this.$store.dispatch('addProduct',newProduct).catch((err) => console.log(err));
      (this.prod_name = ""),
        (this.prod_desc = ""),
        (this.prod_price = ""),
        (this.prod_brands = ""),
        (this.prod_types = ""),
        (this.prod_date = ""),
        (this.selected_colors = []),
        (this.prod_img = ""),
        (this.preview_img = ""),
        (this.name_img = "");
    },
    changeImg(){
      this.prod_img = ""
      this.preview_img = ""
      this.name_img = ""
    }
  },
    created() {
    this.getColorToStore();
  }
};
</script>
<style scoped>
.add-product-section {
  margin: 2.4rem 0 6.4rem 0;
}

/* .small-circle {
  top: 25%;
  left: -5%;
}

.big-circle {
  right: -5%;
} */

.Form {
  width: 100%;
}
.form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  /* padding: 3.6rem 4.8rem; */
  margin: 4.8rem 0;
}

.input-img {
  width: 80%;
  margin: 0 10%;
  text-align: center;
  justify-items: center;
  justify-self: center;
  justify-content: center;
}

.display-img {
  width: 100%;
  position: relative;
}

.display-img img {
  object-fit: cover;
  width: 80%;
  margin: 0 10%;
}

.display-img input {
  display: none;
}

.display-img .img-name{
  font-size: 1.2rem;
  width: 80%;
  margin: 1.2rem 10%;
  text-align: center;
}

.display-img .img-name .fa-times{
  margin-left: 1.4rem;
  font-size: 110%;
  cursor: pointer;
  transition: 0.15s ease-in-out all;
}

.display-img .img-name .fa-times:hover{
  color: red;
}

.add-img {
  width: 80%;
  margin: 0 10%;
  height: 100%;
  background-color: transparent;
  border: 2px dashed rgb(85, 85, 85);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
}

.add-img:hover {
  opacity: 1;
  background-color: rgba(110, 110, 110, 0.15);
  border: 2px dashed #fff;
  color: white;
}

.info-form {
  width: 100%;
  /* height: 48rem; ตอนเเก้ responsive ให้เปลี่ยนเป็น auto แทน */
  background-color: #fff;
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; responsive => no-wrap */
  /* row-gap: 2rem; */
  /* column-gap: 3.6rem; */
  padding: 3.6rem 4.8rem;
  box-shadow: rgba(70, 50, 50, 0.08) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: 0.3s all ease-in-out;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
}

.info-form:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.col-left,
.col-right {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

label {
  display: block;
  text-align: left;
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 1.2rem;
}

input {
  width: auto;
  border: none;
  background: rgba(211, 211, 211, 0.25);
  height: 2.8rem;
  padding: 0.4rem 0.6rem;
  color: #333;
}

.list-of-colors {
  width: auto;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
/* 
input[type="checkbox"] {
  width: 2.4rem;
  height: 2.4rem;
  background-color: #555;
} */

input.checkbox {
  width: 2.4rem;
  height: 2.4rem;
  -webkit-appearance: none;
  box-shadow: inset 0 0 0 1px rgba(85, 85, 85, 0.25);
}

input.checkbox:last-child {
  width: 2.4rem;
  height: 2.4rem;
  -webkit-appearance: none;
  box-shadow: inset 0 0 0 1px rgb(184, 184, 184);
}

input.checkbox:checked {
  box-shadow: inset 0 0 0 2px #555;
}

input.checkbox:last-child:checked {
  box-shadow: inset 0 0 0 2px #eb435f;
}

input:focus {
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: rgb(85, 85, 85, 0.35);
}

textarea {
  color: #333;
  padding: 0.6rem 0.8rem;
  width: 100%;
  height: auto;
  resize: none;
  border: none;
  background: rgba(211, 211, 211, 0.25);
}

textarea:focus {
  outline: none;
}

.prod-brand-type {
  display: flex;
  align-items: center;
  column-gap: 3.6rem;
}

.prod-brand-type label {
  display: inline-block;
  margin-bottom: 1.2rem;
  margin-right: 0.4rem;
}

.prod-colors {
  max-width: 32rem;
}

.btn {
  font-family: "Lato", sans-serif !important;
  text-align: center;
  width: auto;
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 2.4rem;
}

.btn--full {
  margin-top: 2.4rem;
  background-color: #333;
  color: white;
  transition: 0.3s all ease-in-out;
}

.btn--full:hover {
  background-color: #555;
}

.fa-plus-square {
  width: 4.8rem;
  height: 4.8rem;
  color: inherit;
}

/* below 850px */
@media (max-width: 53em) {
  .form {
    grid-template-columns: 1fr;
    row-gap: 3.2rem;
  }
  .add-img {
    width: 50%;
    margin: 0 25%;
    height: 36rem;
  }
}

/* below 530px */
@media (max-width: 33em) {
  .info-form {
    grid-template-columns: 1fr;
  }
  .add-img {
    width: 50%;
    margin: 0 25%;
        height: 36rem;
  }
}
</style>
