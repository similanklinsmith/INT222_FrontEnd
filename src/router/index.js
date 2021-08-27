import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stores from '../views/Store.vue'
import Product from '../views/Product.vue'
import SignUp from '../views/SignUp.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import Users from '../views/Users.vue'
import WishList from '../views/WishList.vue'
import NotFound from '../views/NotFound.vue'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stores',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/stores/product/:id',
    name: 'Product',
    props: true,
    component: Product
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true
  },
  {
    path: '/users',
    name: '๊Users',
    component: Users,
  },
  {
    path: '/wish-list',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/:catchall(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
