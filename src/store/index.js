import { createStore, storeKey } from "vuex";

export default createStore({
  state: {
    products: [],
    colors: [],
    productUrl: "http://localhost:3000/products",
    colorUrl: "http://localhost:3000/colors"
  },
  mutations: {
    // products
    GET_PRODUCTS(state, products) {
      state.products = products;
    },

    UPDATE_WISHLIST(state, updateWishlist) {
      const index = state.products.findIndex(
        (product) => product.id === updateWishlist.id
      );
      if (index !== -1) {
        // replace element at index from products[index] to updateWishlist
        state.products.splice(index, 1, updateWishlist);
      }
    },

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

    // colors
    GET_COLORS(state,colors){
      state.colors = colors;
    }
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

    setProductWishList(context, editProduct) {
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
          context.commit("UPDATE_WISHLIST", data);
        })
        .catch((err) => console.log(err));
    },

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

    // colors
    getColorToStore(context) {
      fetch(this.state.colorUrl)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GET_COLORS", data);
        })
        .catch((err) => console.log(err.message));
    },
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
    getColors(state){
      return state.colors;
    }
  },
  modules: {},
});
