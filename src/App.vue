<template>
  <div>
    <div id="nav">
      <!-- :style="isMobileSign >= 470 && this.$route.name == 'SignUp' ? {display : none} : {}" -->
      <div class="logo"><span>NERDY</span>STYLE</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <a href="/#section-about">About</a>
        <router-link to="/stores">Stores</router-link>
        <router-link to="/add-product">Add</router-link>
        <router-link to="/users">Users</router-link>
        <router-link class="sign" to="/sign-up">Sign up</router-link>
        <router-link to="/wish-list"><i class="far fa-heart"></i></router-link>
        <!-- <router-link to="/about"><i class="fas fa-sun"></i></router-link> -->
      </div>
      <div
        class="nav-mobile-links"
        @click="isShow = !isShow"
        v-if="isShow == false"
      >
        <i class="fas fa-bars"></i>
      </div>
      <div
        class="nav-mobile-links"
        @click="isShow = !isShow"
        v-if="isShow == true"
      >
        <i class="fas fa-times"></i>
      </div>
      <div class="menu-bar" v-show="isShow" >
        <router-link to="/" @click="isShow = !isShow">Home</router-link>
        <a href="/#section-about" @click="isShow = !isShow">About</a>
        <router-link to="/stores" @click="isShow = !isShow">Stores</router-link>
        <router-link to="/add-product" @click="isShow = !isShow"
          >Add</router-link
        >
        <router-link to="/users" @click="isShow = !isShow">Users</router-link>
        <router-link class="sign" to="/sign-up" @click="isShow = !isShow"
          >Sign up</router-link
        >
         <router-link to="/wish-list" @click="isShow = !isShow">Wish List</router-link>
      </div>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <!-- <router-view/> -->
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  computed:{
    isMobileSign(){
      return window.innerWidth;
    }
  },
  mounted() {
    // console.log( window.innerWidth);
    // console.log(this.$route.name)
    $(document).ready(function() {
      $(window).scroll(function() {
        if (this.scrollY > 1) {
          $("#nav").addClass("sticky");
          // document.getElementById("nav").style.position = "relative";
        } else {
          $("#nav").removeClass("sticky");
          // document.getElementById("nav").style.position = "absolute";
        }
      });
    });
    document.querySelector(".logo").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
#nav {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  padding: 3.2rem 4.8rem;
  align-items: center;
  z-index: 1000;
  width: 100%;
  transition: 0.3s all ease-in-out;
}

.sticky {
  top: 0%;
  position: fixed !important;
  background-color: rgba(231, 227, 224, 0.75);
  padding-bottom: 3.6rem;
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  /* webkit is for safari */
  -webkit-backdrop-filter: blur(10px) saturate(100%) contrast(45%)
    brightness(130%);
  transition: 0.3s all ease-in-out;
}

.logo {
  padding-left: 4.8rem;
  font-weight: 900;
  font-size: 2.4rem;
  color: #333;
  cursor: pointer;
}

.logo span {
  color: #eb435f;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 7.2rem;
  justify-self: center;
  align-items: center;
  font-size: 1.6rem;
}

.nav-links .sign {
  background-color: #eb435f;
  padding: 0.8rem 1.2rem;
  color: white;
}

.nav-links a,
.menu-bar a {
  color: #444;
}

.nav-links .sign:hover {
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #eb435f;
}

.nav-links a:link,
.nav-links a:visited,
.menu-bar a:link,
.menu-bar a:visited {
  text-decoration: none;
  transition: 0.3s all ease-in-out;
}

.nav-links a:hover,
.menu-bar a:hover {
  color: #eb435f;
}

.nav-links a.router-link-exact-active,
.menu-bar a.router-link-exact-active {
  color: #eb435f;
}

.nav-links .sign.router-link-exact-active {
  color: #fff;
  background: #bc364c;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(10rem);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}

.route-leave-active {
  transition: 0.3s all ease-in;
}

.nav-mobile-links {
  display: none;
}

.menu-bar {
  display: none;
}

@media (max-width: 84em) {
  .nav-links {
    display: none;
  }
  .logo {
    padding-left: 0rem;
  }
  .nav-mobile-links {
    display: block;
    font-size: 2rem;
    color: #333;
    justify-self: end;
  }
  .menu-bar {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    grid-column: span 2;
    row-gap: 2.4rem;
    margin-top: 4rem;
    font-size: 1.6rem;
    animation-name: appears-from-top;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
  .menu-bar a {
    /* border-bottom: rgba(85, 85, 85,0.25) solid 0.5px; */
    padding-bottom: 2rem;
  }
  /* .menu-bar a:last-child{
     border-bottom: none;
  } */
}

/* below 588px */
@media (max-width: 37em) {
  .logo {
    padding-left: 0rem;
    font-size: 2rem;
  }
    .menu-bar {
    row-gap: 1.8rem;
    }
}

@media (max-width: 29em) {
  #nav {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    padding: 2.4rem 2rem;
    align-items: center;
    z-index: 1000;
    width: 100%;
    transition: 0.3s all ease-in-out;
  }
}
</style>
