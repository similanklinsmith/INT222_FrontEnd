import { createStore, storeKey } from "vuex";

export default createStore({
  state: {
    products: [],
    colors: [],
    brands: [],
    categories: [],
    wishlists: [],
    productUrl: "http://localhost:3000/products",
    colorUrl: "http://localhost:3000/colors",
    brandUrl: "http://localhost:3000/brands",
    categoryUrl: "http://localhost:3000/categories",
    wishlistUrl: "http://localhost:3000/wishlist",
  },
  mutations: {
    // products
    GET_PRODUCTS(state, products) {
      state.products = products;
    },

    // UPDATE_WISHLIST(state, updateWishlist) {
    //   const index = state.products.findIndex(
    //     (product) => product.id === updateWishlist.id
    //   );
    //   if (index !== -1) {
    //     // replace element at index from products[index] to updateWishlist
    //     state.products.splice(index, 1, updateWishlist);
    //   }
    // },

    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },

    UPDATE_PRODUCT(state, updateProduct) {
      const index = state.products.findIndex(
        (product) => product.id === updateProduct.id
      );
      if (index !== -1) {
        state.products.splice(index, 1, updateProduct);
      }
    },

    DELETE_PRODUCT(state, id) {
      const index = state.products.findIndex((product) => product.id == id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },

    // wishlist
    GET_WISHLIST(state, wishlists) {
      state.wishlists = wishlists;
    },

    ADD_WISHLIST(state, newWishlist) {
      state.wishlists.push(newWishlist);
    },

    DELETE_WISHLIST(state, id) {
      const index = state.wishlists.findIndex((wishlist) => wishlist.id == id);
      if (index !== -1) {
        state.wishlist.splice(index, 1);
      }
    },

    // colors
    GET_COLORS(state, colors) {
      state.colors = colors;
    },

    ADD_COLOR(state, color) {
      state.colors.push(color);
    },

    DELETE_COLOR(state, id) {
      const index = state.colors.findIndex((color) => color.id == id);
      if (index !== -1) {
        state.colors.splice(index, 1);
      }
    },

    UPDATE_COLOR(state, updateColor) {
      const index = state.colors.findIndex(
        (color) => color.id == updateColor.id
      );
      if (index !== -1) {
        state.colors.splice(index, 1, updateColor);
      }
    },

    // brands
    GET_BRANDS(state, brands) {
      state.brands = brands;
    },
    ADD_BRAND(state, color) {
      state.brands.push(color);
    },
    DELETE_BRAND(state, id) {
      const index = state.brands.findIndex((brand) => brand.id == id);
      if (index !== -1) {
        state.brands.splice(index, 1);
      }
    },
    UPDATE_BRAND(state, updateBrand) {
      const index = state.brands.findIndex(
        (brand) => brand.id == updateBrand.id
      );
      if (index !== -1) {
        state.brands.splice(index, 1, updateBrand);
      }
    },

    // categories
    GET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    getProductsToStore(context) {
      fetch(this.state.productUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_PRODUCTS", data);
        })
        .catch((err) => console.log(err.message));
    },

    // setProductWishList(context, editProduct) {
    //   const jsonProduct = JSON.stringify(editProduct, {
    //     type: "application/json",
    //   });
    //   fetch(this.state.productUrl + "/" + editProduct.id, {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: jsonProduct,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       context.commit("UPDATE_WISHLIST", data);
    //     })
    //     .catch((err) => console.log(err));
    // },

    addProduct(context, newProduct) {
      const jsonProduct = JSON.stringify(newProduct, {
        type: "application/json",
      });
      fetch(this.state.productUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonProduct,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("ADD_PRODUCT", data);
        })
        .catch((err) => console.log(err));
    },

    editProduct(context, editProduct) {
      const jsonProduct = JSON.stringify(editProduct, {
        type: "application/json",
      });
      fetch(this.state.productUrl + "/" + editProduct.id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonProduct,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("UPDATE_PRODUCT", data);
        })
        .catch((err) => console.log(err));
    },

    deleteProduct(context, id) {
      fetch(this.state.productUrl + "/" + id, {
        method: "DELETE",
      }).catch((err) => console.log(err.message));
      context.commit("DELETE_PRODUCT", id);
    },

    // wishlist
    getWishListToStore(context) {
      fetch(this.state.wishlistUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_WISHLIST", data);
        })
        .catch((err) => console.log(err.message));
    },

    addToWishList(context, newWishList) {
      const jsonWishList = JSON.stringify(newWishList, {
        type: "application/json",
      });
      fetch(this.state.wishlistUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonWishList,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("ADD_WISHLIST", data);
        })
        .catch((err) => console.log(err));
    },

    deleteWishlist(context, id) {
      const index = this.state.wishlists.findIndex(
        (wishlist) => wishlist.product_id == id
      );
      const wishlistId = this.state.wishlists[index];
      console.log(this.state.wishlists);
      fetch(this.state.wishlistUrl + "/" + wishlistId, {
        method: "DELETE",
      }).catch((err) => console.log(err.message));
      context.commit("DELETE_WISHLIST", wishlistId);
    },

    // colors
    getColorToStore(context) {
      fetch(this.state.colorUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_COLORS", data);
        })
        .catch((err) => console.log(err.message));
    },

    addColor(context, newColor) {
      const jsonColor = JSON.stringify(newColor, {
        type: "application/json",
      });
      fetch(this.state.colorUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonColor,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("ADD_COLOR", data);
        })
        .catch((err) => console.log(err));
    },

    deleteColor(context, id) {
      fetch(this.state.colorUrl + "/" + id, {
        method: "DELETE",
      }).catch((err) => console.log(err.message));
      context.commit("DELETE_COLOR", id);
    },

    editColor(context, editcolor) {
      const jsonColor = JSON.stringify(editcolor, {
        type: "application/json",
      });
      fetch(this.state.colorUrl + "/" + editcolor.id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonColor,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("UPDATE_COLOR", data);
        })
        .catch((err) => console.log(err));
    },

    // brands
    getBrandsToStore(context) {
      fetch(this.state.brandUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_BRANDS", data);
        })
        .catch((err) => console.log(err.message));
    },
    addBrand(context, newBrand) {
      const jsonBrand = JSON.stringify(newBrand, {
        type: "application/json",
      });
      fetch(this.state.brandUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonBrand,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("ADD_BRAND", data);
        })
        .catch((err) => console.log(err));
    },
    deleteBrand(context, id) {
      fetch(this.state.brandUrl + "/" + id, {
        method: "DELETE",
      }).catch((err) => console.log(err.message));
      context.commit("DELETE_BRAND", id);
    },
    editBrand(context, editBrand) {
      const jsonBrand = JSON.stringify(editBrand, {
        type: "application/json",
      });
      fetch(this.state.brandUrl + "/" + editBrand.id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonBrand,
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("UPDATE_BRAND", data);
        })
        .catch((err) => console.log(err));
    },

    // categories
    getCategoriesToStore(context) {
      fetch(this.state.categoryUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_CATEGORIES", data);
        })
        .catch((err) => console.log(err.message));
    },

    // sign-in
  },
  getters: {
    // product getters
    getProducts(state) {
      return state.products;
    },
    getProductById: (state) => (id) => {
      return state.products.filter((product) => {
        return product.id == id;
      });
    },

    // color getters
    getColors(state) {
      return state.colors;
    },

    // brand getters
    getBrands(state) {
      return state.brands;
    },

    // category getters
    getCategories(state) {
      return state.categories;
    },

    // wishlist getter
    getWishList() {
      return state.wishlists;
    },
  },
  modules: {},
});
