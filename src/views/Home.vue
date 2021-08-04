<template>
  <div class="home">
    <section class="section section-header">
      <div class="gallery">
        <div class="show-img">
          <div class="decor-rectangle">
            <div class="rectangle"></div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
          </div>

          <img
            class="img-display-big"
            :src="images[cursor - 1].src"
            alt="New Arrival Cloth Summer Collection"
          />

          <div class="circle"></div>
          <div class="circle-2"></div>
        </div>
        <div class="slot-images">
          <div v-for="image in images" :key="image.id">
            <div class="image-small">
              <img
                :src="image.src"
                alt="New Arrival Cloth Summer Collection Thumbnails"
                @click="displayImg(image.id)"
                :class="image.click ? '' : 'gray-img'"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="hero">
        <div class="big-circle"></div>
        <div class="sub-heading">new collection</div>
        <div class="hero-header">
          <h3 class="header">
            Create <br />your own <br />
            <div class="wrapper">
              <span :style="cssVar" class="typing-demo"
                >{{ images[cursor - 1].text }}.</span
              >
            </div>
          </h3>
        </div>
        <div class="hero-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          ut dignissimos quia consequuntur animi beatae!
        </div>
        <div class="button">
          <a href="#" class="btn btn--full">Get yours</a>
          <a href="#" class="btn btn--ghost">Learn more &darr;</a>
        </div>
      </div>
      <div class="icon-scroll"></div>
    </section>

    <section class="section section-features">
      <div class="container">
        <div class="tertiary-header">
          Co-operating Brands
        </div>
        <div class="brand-logos">
          <img
            class="logo"
            src="../../src/assets/images/brand-logos/uniqlo-logo.jpg"
            alt=""
          />
          <img
            class="logo"
            src="../../src/assets/images/brand-logos/CC-OO.jpg"
            alt=""
          />
          <img
            class="logo"
            src="../../src/assets/images/brand-logos/zara-logo.jpg"
            alt=""
          />
          <img
            class="logo"
            src="../../src/assets/images/brand-logos/HM.jpg"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="section section-new" id="section-new">
      <div class="container">
        <div class="sub-heading">check it out</div>
        <div class="secondary-header" id="arrivals">
          New Arrivals
        </div>
        <div class="new-header">
          <div class="figure">
            <img
              class="new-header-img"
              id="new-header-img"
              src="../../src/assets/images/section-new-header.jpg"
              alt=""
            />
          </div>

          <div class="new-ads">
            <div class="new-header-text">
              Got matchy-matchy from ฿599
            </div>
            <div class="new sub-heading">
              We're totally set on (basic) sets.
            </div>
            <div class="btn-new">
              <a class="btn btn--full " href="#">Shop now</a>
            </div>
          </div>
          <div class="big-circle"></div>
          <div class="small-circle"></div>
        </div>
        <div class="gallery-category">
          <div class="cards grid grid--3-cols">
            <div class="card">
              <img src="../../src/assets/images/hero-image-2.jpg" alt="" />
            </div>
            <div class="card">
              <img src="../../src/assets/images/hero-image-4.jpg" alt="" />
            </div>
            <div class="categories">
              <div class="tertiary-header">
                Category:
              </div>
              <ul class="lists">
                <li v-for="category in categories" :key="category.id">
                  <a
                    @click="selected(category.id)"
                    :class="category.selected ? 'selected-category' : ''"
                    >{{ category.text }}</a
                  >
                </li>
              </ul>
              <div class="see-more">
                <a href="#">See more <span>&rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="get-app">
          <div class="new-header-text">
            Get the <div class="logo"><span>NERDY</span>STYLE</div> App
          </div>
           <div class="sub-heading">Get in touch</div>
          <div class="app-button">
            <a href="#" class="btn btn--ghost">Android</a>
            <a href="#" class="btn btn--ghost">IOS</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-about">
           <div class="circle"></div>
      <div class="container">
        <div class="sub-heading">Let's talk</div>
        <div class="secondary-header">
          About us
        </div>
        <div class="profile grid">
          <div class="profile-img">
            <img src="../../src/assets/images/hero-image-4.jpg" alt="">
          </div>
          <div class="profile info">
            <div class="name">Kim <div class="first-name">Sunwoo</div></div>
            <div class="position">Main Rapper, Lead Dancer</div>
            <div class="line-border"></div>
            <div class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil beatae temporibus assumenda delectus sit?</div>
            <ul class="social-links">
          <li>
            <a class="footer-link" href="#"
              ><i class="icon fab fa-facebook-square"></i
            ></a>
          </li>
          <li>
            <a class="footer-link" href="#"
              ><i class="icon fab fa-instagram-square"></i
            ></a>
          </li>
          <li>
            <a class="footer-link" href="#"
              ><i class="icon fab fa-twitter-square"></i
            ></a>
          </li>
        </ul>
          </div>
          <div class="nav-member">
            sdf
          </div>
        </div>
       
      </div>
    </section>
  </div>
  <Socials class="socials"></Socials>
  <Footer class="footer"></Footer>
</template>

<script>
window.addEventListener("scroll", function() {
  let newArrivals = document.getElementById("arrivals");
  let news = document.getElementById("section-new");
  let about = document.querySelector(".section-about");
  // let value = window.scrollY;
  if (window.pageYOffset > newArrivals.offsetTop) {
    newArrivals.style.transform = "scale(1)";
    news.style.transform = "scale(1)";
    news.style.opacity = 1;
  } else if (window.pageYOffset <= (newArrivals.offsetTop / 2) ) {
    news.style.opacity = 0;
    newArrivals.style.transform = "scale(1.25)";
    news.style.transform = "scale(1.25)";
  }

  if(window.pageYOffset > about.offsetTop/2){
    about.style.transform = "scale(1)";
    about.style.opacity = 1;
  } else if (window.pageYOffset <= (about.offsetTop / 2) ) {
    about.style.opacity = 0;
    about.style.transform = "scale(1.25)";
  }

  // console.log(newArrivals)
});

import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Socials,
    Footer,
  },
  data() {
    return {
      show: true,
      images: [
        {
          id: 1,
          src: require("../../src/assets/images/hero-image.jpg"),
          text: "Style",
          click: true,
        },
        {
          id: 2,
          src: require("../../src/assets/images/hero-image-2.jpg"),
          text: "Choices",
          click: false,
        },
        {
          id: 3,
          src: require("../../src/assets/images/hero-image-3.jpg"),
          text: "Ways",
          click: false,
        },
        {
          id: 4,
          src: require("../../src/assets/images/hero-image-4.jpg"),
          text: "Matches",
          click: false,
        },
      ],
      cursor: 1,
      categories: [
        {
          id: 1,
          text: "Men",
          selected: true,
        },
        {
          id: 2,
          text: "Women",
          selected: false,
        },
        {
          id: 3,
          text: "Kids",
          selected: false,
        },
        {
          id: 4,
          text: "Unisex",
          selected: false,
        },
        {
          id: 5,
          text: "Accessories",
          selected: false,
        },
        {
          id: 6,
          text: "Shoes",
          selected: false,
        },
      ]
    };
  },

  methods: {
    displayImg(id) {
      for (let index = 0; index < this.images.length; index++) {
        if (this.images[index].click === true) {
          this.images[index].click = false;
        }
      }
      this.cursor = id;
      this.images[this.cursor - 1].click = true;
    },
    selected(id) {
      for (let index = 0; index < this.categories.length; index++) {
        if (this.categories[index].selected === true) {
          this.categories[index].selected = false;
        }
      }
      console.log(id);
      this.categories[id - 1].selected = true;
    },
  },

  computed: {
    cssVar() {
      return {
        width: this.images[this.cursor - 1].text.length + 1 + "ch",
        // 'backgroundColor': this.bgColor,
      };
    },
  },
};
</script>

<style scoped>
/*--------------------------- 
HEADER SECION
--------------------------- */
.home {
  margin-top: 0;
  max-width: 100%;
}

.section-header {
  margin: 0 0 18rem 0;
  max-width: 100%;
  display: grid;
  grid-template-columns: 3fr 4fr;
  position: relative;
}

.decor-rectangle {
  display: flex;
  flex-direction: column;
  position: absolute;
  row-gap: 1.2rem;
}

.rectangle {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #eb435f;
  /* background-color: #eb435f; */
  transform: translateY(7.2rem) translateX(7.2rem);
}

.circle {
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 1px solid #eb435f;
  position: absolute;
  right: 0;
  transform: translateY(-9.6rem) translateX(3.6rem);
}

.circle-2 {
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50%;
  background-color: #eb435f;
  position: absolute;
  right: 15%;
  top: 85%;
  transform: translateY(-9.6rem) translateX(3.6rem);
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.gallery {
  display: grid;
  grid-template-columns: 90fr 10fr;
}

.gallery .show-img {
  margin-top: 3.6rem;
  align-self: center;
  text-align: end;
  height: 50rem;
  width: 100%;
  position: relative;
}

.gallery .show-img img {
  width: 80%;
  height: 100%;
  object-fit: cover;
  justify-self: center;
  animation-name: appears;
  animation-duration: 0.75s;
  animation-iteration-count: 1;
}

.show-img {
  position: relative;
}

.slot-images {
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-left: 1.2rem;
  position: relative;
}

.slot-images img {
  width: 4.8rem;
  height: 4.8rem;
  object-fit: cover;
  cursor: pointer;
}

.hero {
  margin-top: 9.6rem;
  width: 80%;
  justify-self: center;
  text-align: start;
}
.hero.big-circle {
  animation-duration: 1s;
  animation-delay: 0.5s;
}
.sub-heading {
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  word-spacing: 0.8rem;
  letter-spacing: 0.8rem;
  margin-bottom: 2rem;
}

.hero-header {
  width: 100%;
  text-transform: uppercase;
  color: #333;
}

.header {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 1.2;
  letter-spacing: 0.2rem;
  margin-bottom: 2.4rem;
}

.hero-header span {
  color: #eb435f;
}

.wrapper {
  display: flex;
  align-items: center;
}

.typing-demo {
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
}

.hero-text {
  width: 80%;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.8;
  letter-spacing: 0.2rem;
  margin-bottom: 2.4rem;
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

.gray-img {
  filter: grayscale(1);
}

.image-small {
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
  transition: 0.3s all ease-in-out;
}

.image-small img {
  transition: 0.3s all ease-in-out;
}

.image-small img:hover {
  transform: scale(1.25);
  filter: grayscale(0);
}

/*--------------------------- 
SOCIALS NAV
--------------------------- */
.socials {
  position: fixed;
  right: 0;
  top: 45%;
  margin-right: 2.4rem;
}

/*--------------------------- 
CO-OP BRANDS FEATURE SECION
--------------------------- */
.brand-logos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 4.8rem;
}

.brand-logos img {
  width: 7.2rem;
  height: auto;
  filter: grayscale(1);
  opacity: 0.75;
}

/*--------------------------- 
NEW SECION
--------------------------- */

.section-new {
  margin-top: 3.6rem;
  opacity: 0;
  transform: scale(1.25);
  transition: 1s all ease-in-out;
}

#arrivals {
  transition: 1s all ease-in-out;
  transform: scale(1.25);
}

.new-header {
  position: relative;
}

.new-header img {
  overflow: hidden;
  width: 90%;
  margin: 2.4rem 5%;
  transition: 0.25s all ease-in-out;
}

.new-header img:hover {
  filter: saturate(125%);
}

.new-ads {
  position: absolute;
  width: 90%;
  margin: 0 5%;
  transform: translateY(-18rem);
}

.new-header-text {
  text-align: center;
  width: 100%;
  margin-bottom: 1.2rem;
  /* position: absolute; */
  font-size: 3.6rem;
  font-weight: 700;
  color: white;
  /* transform: translateY(-18rem); */
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  word-spacing: 0.8rem;
}

.new {
  text-align: center;
  width: 100%;
  /* position: absolute;
  transform: translateY(-14rem); */
  color: white;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
}

.btn-new {
  text-align: center;
  /* position: absolute;
  transform: translateY(-10rem); */
  /* width: 100%; */
  /* margin: 0 50rem; */
}

.big-circle {
  width: 20rem;
  height: 20rem;
  /* background: #eb435f; */
  border: 1px solid #eb435f;
  position: absolute;
  top: 10%;
  right: 0;
  z-index: -1;
  border-radius: 50%;
  animation-name: floating;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.small-circle {
  width: 15rem;
  height: 15rem;
  background: #eb435f;
  /* border: 1px solid #eb435f; */
  position: absolute;
  top: 50%;
  z-index: -1;
  border-radius: 50%;
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.cards {
  width: 80%;
  margin: 3.6rem 10%;
}

.card {
  width: 100%;
  height: 100%;
  /* background-color: white; */
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all ease-in-out;
}

.card img:hover {
  transform: scale(1.05);
}

.categories {
  border-left: 0.5px solid rgba(85, 85, 85, 0.25);
  padding-left: 4.8rem;
  position: relative;
  overflow: hidden;
}

.categories .tertiary-header {
  text-align: left;
}

.categories ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 2.4rem;
}

.categories li a {
  text-decoration: none;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  color: #555;
  padding: 0.4rem 0.8rem;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
}

.categories li a:hover {
  color: #333;
}

.selected-category {
  color: #e7e3e0 !important;
  background-color: #eb435f;
  transition: 0.2s all ease-in-out;
}

.selected-category:hover {
  background-color: #bc364c;
}

.categories .see-more a:link,
.categories .see-more a:visited {
  position: absolute;
  display: inline;
  font-size: 1.6rem;
  color: #333;
  text-decoration: none;
  padding-left: 0;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(85, 85, 85, 0.25);
  bottom: 5%;
  letter-spacing: 0.2rem;
  transition: 0.2s all ease-in-out;
}

.categories .see-more a:hover,
.categories .see-more a:active {
  padding-bottom: 0.8rem;
  color: #eb435f;
  border-bottom: 1px solid rgba(235, 67, 95, 0.25);
}

.get-app {
  margin: 0 5%;
  width: 90%;
  background-color: #333;
  padding: 4.8rem 2.4rem;
}

.app-button{
  text-align: center;
  margin-top: 4.8rem;
}

.get-app .logo {
  display: inline;
}

.get-app .logo span {
  color: #eb435f;
}

.get-app .sub-heading{
  text-align: center;
  color: white;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
}

.app-button a:first-child{
  margin-right: 4.8rem;
}

.app-button .btn--ghost:link,
.app-button .btn--ghost:visited {
  font-size: 1.4rem;
  width: 16rem;
  box-shadow: inset 0 0 0 1px #e7e3e0;
  color:#e7e3e0;
  transition: 0.3s all ease-in-out;
}

.app-button .btn--ghost:hover,
.app-button .btn--ghost:active {
  box-shadow: none;
  color:#e7e3e0;
  transition: 0.3s all ease-in-out;
}


/*--------------------------- 
ABOUT SECION
--------------------------- */
.section-about {
  margin-top: 9.6rem;
  position: relative;
  transform: scale(1.25);
  opacity: 0;
  transition: 1s all ease-in-out;
}


.profile{
  width: 100%;
  grid-template-columns: 2.5fr 4fr;
}

.profile-img{
  width: 100%;

}

.profile-img img{
  width: 100%;
  height: 36rem;
  object-fit: cover;
  /* margin-left: 0%; */
}

.section-about .circle{
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  /* background-color: #eb435f; */
  position: absolute;
  border: 1px solid #eb435f;
  z-index:-1;
  left: -5%;
  top: 20%;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}


.profile .info .name{
  display: inline-block;
  color: #333;
  font-size: 2.4rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.profile .info .position{
  color: #555;
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
}

.line-border{
  margin: 1.2rem 0;
  height: 6.4rem;
  border-left: 1px solid rgba(85, 85, 85, 0.5);
}

.text-info{
  line-height: 1.4;
  width: 60%;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2.4rem;
}

.social-links{
    list-style: none;
    display: flex;
    gap: 2.4rem;
}

.icon{
  width: 2.4rem;
  height: 2.4rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}

.icon:hover{
  color: #bc364c;
} 


/*--------------------------- 
FOOTER
--------------------------- */
.footer {
  bottom: 0%;
}
</style>
