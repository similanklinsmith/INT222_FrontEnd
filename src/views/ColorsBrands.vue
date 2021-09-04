<template>
  <div class="Management">
    <div class="management-section">
      <div class="container">
        <div class="Form">
          <div>
            <div class="sub-heading">Colors &amp; Brands</div>
            <div class="secondary-header">Management</div>
          </div>
          <div class="options">
            <div class="switch-btn">
              <div
                class="btn-colors"
                @click="isShow = !isShow"
                :style="[
                  isShow == true
                    ? { backgroundColor: '#eb435f', color: 'white' }
                    : { backgroundColor: '#e7e3e0', color: '#eb435f' },
                ]"
              >
                Colors
              </div>
              <div
                class="btn-brands"
                @click="isShow = !isShow"
                :style="[
                  isShow == false
                    ? { backgroundColor: '#eb435f', color: 'white' }
                    : { backgroundColor: '#e7e3e0', color: '#eb435f' },
                ]"
              >
                Brands
              </div>
            </div>
          </div>

          <!-- Colors -->
          <transition name="slide-fade">
            <div class="table" v-if="isShow">
              <div class="tertiary-header">Colors</div>
              <!-- addForm -->
              <form
                class="color-inputs"
                @submit.prevent="addNewColor"
                v-if="isEditColor == false"
              >
                <div class="color-name">
                  <label for="color-name">Color name</label>
                  <input
                    type="text"
                    placeholder="red"
                    name="color-name"
                    id="color-name"
                    v-model="color_name"
                  />
                </div>
                <div class="color-code">
                  <label for="color-code">Color code</label>
                  <input
                    type="text"
                    placeholder="#FF4219"
                    name="color-code"
                    id="color-code"
                    v-model="color_code"
                  />
                </div>
                <div
                  class="example-color"
                  :style="{ backgroundColor: color_code }"
                ></div>
                <button type="submit" class="btn btn--full">Add Color</button>
              </form>
              <!-- /addForm -->

              <!-- editForm -->
              <form
                v-if="isEditColor"
                class="color-inputs"
                @submit.prevent="editColorById"
              >
                <div class="color-name">
                  <label for="color-name">Color name</label>
                  <input
                    type="text"
                    placeholder="red"
                    name="color-name"
                    id="color-name"
                    v-model="edit_color_name"
                  />
                </div>
                <div class="color-code">
                  <label for="color-code">Color code</label>
                  <input
                    type="text"
                    placeholder="#FF4219"
                    name="color-code"
                    id="color-code"
                    v-model="edit_color_code"
                  />
                </div>
                <div
                  class="example-color"
                  :style="{ backgroundColor: edit_color_code }"
                ></div>
                <button type="submit" class="btn btn--full">Edit Color</button>
              </form>
              <!-- /editForm -->

              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Color Name</th>
                    <th>Color Code</th>
                    <th>Example</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-for="(color, index) in colors" :key="color.color_code">
                  <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ color.color_name }}</td>
                    <td>{{ color.color_code }}</td>
                    <td>
                      <div
                        class="example-color"
                        :style="{ backgroundColor: color.color_code }"
                      ></div>
                    </td>
                    <td>
                      <div
                        class="delete"
                        @click="deleteColorById(color.id)"
                        :style="{ display: 'inline' }"
                      >
                        Delete
                      </div>
                      |
                      <div
                        class="edit"
                        @click="toggleEditColor(color.id)"
                        :style="{ display: 'inline' }"
                      >
                        Edit
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </transition>
          <!-- /Colors -->

          <!-- Brands -->
          <transition name="slide-fade">
            <div class="table" v-if="isShow == false">
              <div class="tertiary-header">Brands</div>
              <!-- addBrand -->
              <form
                class="color-inputs"
                @submit.prevent="addNewBrand"
                v-if="isEditBrand == false"
              >
                <div class="color-name">
                  <label for="brand-name">Brand name</label>
                  <input
                    type="text"
                    placeholder="GUCCI"
                    name="brand-name"
                    id="brand-name"
                    v-model="brand_name"
                  />
                </div>
                <button type="submit" class="btn btn--full">Add Brand</button>
              </form>
              <!-- /addBrand -->

              <!-- editBrand -->
              <form class="color-inputs" @submit.prevent="editBrandById" v-if="isEditBrand">
                <div class="color-name">
                  <label for="brand-name">Brand name</label>
                  <input
                    type="text"
                    placeholder="GUCCI"
                    name="brand-name"
                    id="brand-name"
                    v-model="edit_brand_name"
                  />
                </div>
                <button type="submit" class="btn btn--full">Edit Brand</button>
              </form>
              <!-- /editBrand -->

              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Brand Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-for="(brand, index) in brands" :key="brand.id">
                  <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ brand.brand_name }}</td>
                    <td>
                      <div
                        class="delete"
                        @click="deleteBrandById(brand.id)"
                        :style="{ display: 'inline' }"
                      >
                        Delete
                      </div>
                      |
                      <div
                        class="edit"
                        @click="toggleEditBrand(brand.id)"
                        :style="{ display: 'inline' }"
                      >
                        Edit
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </transition>
          <!-- /Brands -->
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ColorsBrands",
  components: {
    Socials,
    Footer,
  },
  data() {
    return {
      isShow: true,
      isEditColor: false,
      isEditBrand: false,
      // colors
      colorUrl: "http://localhost:3000/colors",
      colors: [],
      color_name: "",
      color_code: "",
      // edit colors
      edit_color_id: "",
      edit_color_name: "",
      edit_color_code: "",
      // edit brands
      edit_brand_id: "",
      edit_brand_name: "",
      // brands
      brandsUrl: "http://localhost:3000/brands",
      brands: [],
      brand_name: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    // this.getAllColors
    this.$store.dispatch("getColorToStore");
    fetch(this.colorUrl)
      .then((res) => res.json())
      .then((data) => {
        this.colors = data;
      })
      .catch((err) => console.log(err.message));
    fetch(this.brandsUrl)
      .then((res) => res.json())
      .then((data) => {
        this.brands = data;
      })
      .catch((err) => console.log(err.message));
  },
  computed: {
    getAllColors() {
      return this.$store.getters.getColors;
    },
    //   ...mapGetters({
    //     getAllColors: 'getColors'
    // })
  },
  methods: {
    //   ...mapActions(["getColorToStore"]),
    // Colors
    addNewColor() {
      const newColor = {
        color_code: this.color_code,
        color_name: this.color_name,
      };
      this.colors.push(newColor);
      this.$store
        .dispatch("addColor", newColor)
        .catch((err) => console.log(err));
      this.color_code = "";
      this.color_name = "";
    },
    deleteColorById(id) {
      if (confirm("Do you really want to delete? 👹")) {
        const index = this.colors.findIndex((color) => color.id == id);
        if (index !== -1) {
          this.colors.splice(index, 1);
          this.$store.dispatch("deleteColor", id);
        }
      }
    },
    editColorById() {
      const index = this.colors.findIndex(
        (color) => color.id == this.edit_color_id
      );
      const editColor = {
        id: this.edit_color_id,
        color_name: this.edit_color_name,
        color_code: this.edit_color_code,
      };
      if (index !== -1) {
        this.colors.splice(index, 1, editColor);
        this.$store.dispatch("editColor", editColor);
        this.edit_color_id = "";
        this.edit_color_name = "";
        this.edit_color_code = "";
        this.isEditColor = false;
      }
    },
    toggleEditColor(id) {
      window.scrollTo(0, 0);
      const index = this.colors.findIndex((color) => color.id == id);
      this.edit_color_id = id;
      this.edit_color_name = this.colors[index].color_name;
      this.edit_color_code = this.colors[index].color_code;
      this.isEditColor = !this.isEditColor;
    },

    // Brands
    addNewBrand() {
      const newBrand = {
        brand_name: this.brand_name,
      };
      this.brands.push(newBrand);
      this.$store
        .dispatch("addBrand", newBrand)
        .catch((err) => console.log(err));
      this.brand_name = "";
    },
    deleteBrandById(id) {
      console.log(id);
      if (confirm("Do you really want to delete? 👹")) {
        const index = this.brands.findIndex((brand) => brand.id == id);
        if (index !== -1) {
          this.$store.dispatch("deleteBrand", id);
          this.brands.splice(index, 1);
        }
      }
    },
    editBrandById() {
      const index = this.brands.findIndex(
        (brand) => brand.id == this.edit_brand_id
      );
      const editBrand = {
        id: this.edit_brand_id,
        brand_name: this.edit_brand_name,
      };
      if (index !== -1) {
        this.brands.splice(index, 1, editBrand);
        this.$store.dispatch("editBrand", editBrand);
        this.edit_brand_id = "";
        this.edit_brand_name = "";
        this.isEditBrand = false;
      }
    },
    toggleEditBrand(id) {
      window.scrollTo(0, 0);
      const index = this.brands.findIndex((brand) => brand.id == id);
      this.edit_brand_id = id;
      this.edit_brand_name = this.brands[index].brand_name;
      this.isEditBrand = !this.isEditBrand;
    },
  },
};
</script>
<style scoped>
.tertiary-header {
  text-align: start;
}
.management-section {
  margin: 2.4rem 0 6.4rem 0;
}

.options {
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 0 5%;
  justify-items: end;
}
.switch-btn {
  display: flex;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.switch-btn .btn-colors,
.switch-btn .btn-brands {
  box-shadow: inset 0 0 0 1px #eb435f;
  padding: 1.2rem;
  width: 12rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.switch-btn .btn-colors:hover,
.switch-btn .btn-brands:hover {
  color: white !important;
  background-color: #bc364c !important;
}
.Form {
  width: 100%;
}
.table {
  width: 90%;
  margin: 4.8rem 5%;
}
.color-inputs {
  width: 100%;
  margin: 2.4rem 0;
  display: flex;
  flex-direction: row;
  gap: 3.6rem;
  justify-items: center;
  flex-wrap: wrap;
}

.color-inputs label {
  font-size: 1.4rem;
  margin-right: 1.2rem;
}

input {
  width: auto;
  border: none;
  background: fff;
  height: 2.8rem;
  padding: 0.4rem 0.6rem;
  color: #333;
}
input:focus {
  outline: none;
}

input::placeholder {
  color: rgb(85, 85, 85, 0.35);
}
.btn {
  font-family: "Lato", sans-serif !important;
  text-align: center;
  width: auto;
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 1.2rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  height: 2.8rem;
}
.btn--full {
  background-color: #333;
  color: white;
  transition: 0.3s all ease-in-out;
}
.btn--full:hover {
  background-color: #555;
}

table {
  border-collapse: collapse;
  width: 100%;
}
thead {
  font-size: 1.4rem;
  text-transform: uppercase;
  background-color: #333;
  color: white;
}
th {
  font-weight: 400;
  padding: 2rem;
}
th:nth-child(even) {
  background-color: #555;
}
tbody {
  font-size: 1.4rem;
  text-align: center;
  background-color: #fff;
  transition: 0.2s all ease-in-out;
}
tbody td {
  padding: 1.4rem;
  line-height: 1.8;
}
tbody:hover {
  background-color: rgb(245, 244, 244);
}
tbody td:nth-child(4) {
  height: 8rem;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.example-color {
  width: 2.4rem;
  height: 2.4rem;
  box-shadow: inset 0 0 0 1px rgba(85, 85, 85, 0.25);
}
.delete,
.edit {
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
.delete:hover {
  color: #eb435f;
}
.edit:hover {
  color: #ffd700;
}
/* below 872px */
@media (max-width: 55em) {
  .color-inputs {
    row-gap: 1.2rem;
  }
  .options {
    justify-items: start;
  }
}
/* below 542px */
@media (max-width: 34em) {
  .options {
    justify-items: center;
  }
  .color-inputs .example-color {
    display: none;
  }
  .table {
    margin: 4.8rem 0;
    width: 100%;
  }
  th {
    padding: 1.2rem;
  }
  thead,
  tbody {
    font-size: 1.2rem;
  }
}
/* below 450px */
@media (max-width: 28em) {
  .example-color {
    width: 1.6rem;
    height: 1.6rem;
  }
  th {
    padding: 1rem;
  }
  tbody td {
    padding: 1.8rem;
  }
}
</style>
