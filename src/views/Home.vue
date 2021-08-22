<template>
  <div class="home">
    <section class="section section-header">
      <div class="space"></div>
      <div class="hero">
        <!-- <div class="big-circle"></div> -->
        <div class="header-text">
          <div class="sub-heading">new collection</div>
          <div class="hero-header">
            <h3 class="header">
              Create <br />your own <br />
              <div class="wrapper">
                <!-- :style="cssVar" -->
                <span class="typing-demo" :style="cssVar">Style.</span>
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
      </div>
      <div class="icon-scroll"></div>
    </section>

    <section class="section section-features">
      <div class="container">
        <div class="tertiary-header">Co-operating Brands</div>
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
        <div class="secondary-header" id="arrivals">New Arrivals</div>
        <div class="new-info">
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
              <div class="new-header-text">Got matchy-matchy from ฿599</div>
              <div class="new sub-heading">
                We're totally set on (basic) sets.
              </div>
              <div class="btn-new">
                <a class="btn btn--full" href="#">Shop now</a>
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
                <div class="tertiary-header">Category:</div>
                <ul class="lists">
                  <li v-for="category in categories" :key="category.id">
                    <a
                      @click="selected(category.id)"
                      :class="category.selected ? 'selected-category' : ''"
                      >{{ category.text }}</a
                    >
                  </li>
                  <li class="see-more">
                    <a href="#">See more <span>&rarr;</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- component -->
        <div class="get-app">
          <div class="new-header-text">
            Get the
            <div class="logo"><span>NERDY</span>STYLE</div>
            App
          </div>
          <div class="sub-heading">Keep in touch</div>
          <div class="app-button">
            <a href="#" class="btn btn--ghost">Android</a>
            <a href="#" class="btn btn--ghost">IOS</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-about" id="section-about">
      <!-- <div class="small-circle"></div>
      <div class="circle"></div> -->
      <div class="container">
        <div class="sub-heading">Let's talk</div>
        <div class="secondary-header">About us</div>
        <div class="profile grid">
          <div
            class="profile-img"
            v-if="members[cursorMember - 1].show == true"
          >
            <img :src="members[cursorMember - 1].image" alt="" />
          </div>
          <div
            class="profile info"
            v-if="members[cursorMember - 1].show == true"
          >
            <div class="name">
              {{ members[cursorMember - 1].lastname }}
              <div class="first-name">{{ members[cursorMember - 1].name }}</div>
            </div>
            <br />
            <div
              class="position"
              v-for="position in members[cursorMember - 1].positions"
              :key="position"
            >
              {{ position + ", " }}
            </div>
            <div class="line-border"></div>
            <div class="text-info">
              {{ members[cursorMember - 1].text }}
            </div>
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
        </div>
        <div class="prev-btn" @click="nextMember">
          <i class="fas icon fa-chevron-right"></i>
        </div>
      </div>
    </section>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Socials,
    Footer,
  },
  //   mounted(){
  //     $(window).on("load",function(){
  //      $(".loader-wrapper").fadeOut("slow");
  // });
  //   },
  data() {
    return {
      cursorMember: 1,
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
      ],
      members: [
        {
          id: 1,
          name: "Sunwoo",
          lastname: "Kim",
          positions: ["Main Rapper", "Lead Dancer"],
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil beatae temporibus assumenda delectus sit",
          image: require("../../src/assets/images/hero-image-4.jpg"),
          show: true,
        },
        {
          id: 2,
          name: "Juyeon",
          lastname: "Lee",
          positions: ["Main Rapper", "Lead Dancer"],
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil beatae temporibus assumenda delectus sit",
          image: require("../../src/assets/images/hero-image-4.jpg"),
          show: false,
        },
        {
          id: 3,
          name: "Hyunjae",
          lastname: "Lee",
          positions: ["Main Rapper", "Lead Dancer"],
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil beatae temporibus assumenda delectus sit",
          image: require("../../src/assets/images/hero-image-4.jpg"),
          show: false,
        },
      ],
    };
  },
  methods: {
    selected(id) {
      for (let index = 0; index < this.categories.length; index++) {
        if (this.categories[index].selected === true) {
          this.categories[index].selected = false;
        }
      }
      this.categories[id - 1].selected = true;
    },
    nextMember() {
      this.cursorMember++;
      for (let index = 0; index < this.members.length; index++) {
        if (this.members[index].show === true) {
          this.members[index].show = false;
        }
      }
      if (this.cursorMember > this.members.length) {
        this.cursorMember = 1;
      }
      this.members[this.cursorMember - 1].show = true;
    },
  },
  computed: {
    cssVar() {
      return {
        // width: this.images[this.cursor - 1].text.length + 1 + "ch",
        width: 6 + "ch",
      };
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function() {
      let newArrivals = document.getElementById("arrivals");
      let news = document.querySelector(".new-info");
      let about = document.querySelector(".section-about");
      let info = document.querySelector(".info");
      let profileImg = document.querySelector(".profile-img");
      if (window.pageYOffset > newArrivals.offsetTop / 2) {
        // news.style.transform = "scale(1)";
        news.style.opacity = 1;
      } else if (window.pageYOffset <= newArrivals.offsetTop / 2) {
        news.style.opacity = 0;
        // news.style.transform = "scale(1.25)";
      }
      if (window.pageYOffset >= about.offsetTop / 2) {
        info.style.opacity = 1;
        // info.style.transform = "translateX(0rem)";
        // profileImg.style.transform = "translateX(0rem)";
        profileImg.style.opacity = "1";
      } else if (window.pageYOffset <= about.offsetTop / 2) {
        info.style.opacity = 0;
        // info.style.transform = "translateX(4.8rem)";
        profileImg.style.opacity = 0;
        // profileImg.style.transform = "translateX(-4.8rem)";
      }
    });
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
  margin: 0 0 9.6rem 0;
  max-width: 100%;
  height: 66rem;
  display: grid;
  grid-template-columns: 3fr 4fr;
  position: relative;
  background-image: url(../../src/assets/images/header-change-2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* height: 66rem; */
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
  animation-name: appears-from-bottom;
  animation-duration: 1s;
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
  /* margin-top: 9.6rem; */
  width: 80%;
  justify-self: center;
  text-align: start;
  align-self: center;
}
.hero.big-circle {
  animation-duration: 1s;
  animation-delay: 0.5s;
}

.header-text {
  animation-name: appears-from-right;
  animation-duration: 1.2s;
  animation-iteration-count: 1;
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
}

.new-info {
  opacity: 0;
  transition: 1s all;
}

.new-header {
  position: relative;
  overflow: hidden;
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
  font-size: 3.6rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  word-spacing: 0.8rem;
}

.new {
  text-align: center;
  width: 100%;
  color: white;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
}

.btn-new {
  text-align: center;
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
  margin-top: 1.8rem;
  /* position: absolute; */
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

.app-button {
  text-align: center;
  margin-top: 4.8rem;
}

.get-app .logo {
  display: inline;
}

.get-app .logo span {
  color: #eb435f;
}

.get-app .sub-heading {
  text-align: center;
  color: white;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
}

.app-button a:first-child {
  margin-right: 4.8rem;
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

/*--------------------------- 
ABOUT SECION
--------------------------- */
.section-about {
  margin-top: 9.6rem;
  position: relative;
  margin-bottom: 4.8rem;
}

.section-about .container {
  position: relative;
}

.section-about .secondary-header {
  margin-bottom: 3.6rem;
}

.profile {
  width: 90% !important;
  margin: 2.4rem 5%;
  align-items: center;
  grid-template-columns: 2.5fr 4fr;
}

.profile-img {
  width: 100%;
  /* transform: translateX(-4.8rem); */
  opacity: 0;
  transition: 2s all;
  transition-delay: 0.6s;
  overflow: hidden;
}

.profile-img img {
  width: 100%;
  height: 36rem;
  object-fit: cover;
  transition: 0.3s all ease-in-out;
}

.profile-img img:hover {
  transform: scale(1.05);
}

.section-about .circle {
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  position: absolute;
  border: 1px solid #eb435f;
  z-index: -1;
  left: -5%;
  top: 20%;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.section-about .small-circle {
  right: -5%;
}

.info {
  /* transform: translateX(4.8rem); */
  opacity: 0;
  transition: 2s all;
  transition-delay: 0.5s;
}

.profile .info .name {
  display: inline-block;
  color: #333;
  font-size: 2.4rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.profile .info .position {
  color: #555;
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  display: inline;
}

.line-border {
  margin: 1.2rem 0;
  height: 6.4rem;
  border-left: 1px solid rgba(85, 85, 85, 0.5);
}

.text-info {
  line-height: 1.4;
  width: 60%;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2.4rem;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 2.4rem;
}

.icon {
  width: 2.4rem;
  height: 2.4rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}

.icon:hover {
  color: #bc364c;
}

.section-about .fa-chevron-right {
  position: absolute;
  right: 15%;
  top: 50%;
  font-weight: 100;
  width: 2.4rem;
  height: 2.4rem;
}

/* below 968px */
@media (max-width: 61em) {
  .header {
    font-weight: 700;
    font-size: 5.2rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    margin-bottom: 2.4rem;
  }
  .hero-text {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 0.2rem;
    margin-bottom: 2.4rem;
  }
  .new-header-text {
    margin-bottom: 1.2rem;
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    word-spacing: 0.8rem;
  }
  .categories ul {
    width: 100%;
    flex-direction: row;
    /* justify-content: space-around; */
    justify-content: center;
    gap: 1rem;
  }
  .categories .see-more a {
    font-size: 1.4rem !important;
    position: relative;
  }
  .grid--3-cols {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }
  .categories {
    grid-column: span 2;
    border: none;
    padding-left: 0;
    grid-row: 1;
    /* padding-left: 1.2rem; */
    margin-bottom: 3.6rem;
  }
  .lists {
    display: flex;
    flex-wrap: wrap;
    row-gap: 3.2rem !important;
  }
  .categories li a {
    font-size: 1.4rem;
    justify-items: center;
  }
}

/* below 588px */
@media (max-width: 37em) {
  .space {
    display: none;
  }
  .section-header {
    grid-template-columns: 1fr;
  }
  .header {
    text-align: center;
  }
  .header-text .sub-heading {
    text-align: center;
  }
  .hero-text {
    text-align: center;
  }
  .wrapper {
    justify-content: center;
  }
  .button {
    text-align: center;
  }
  .brand-logos {
    margin-top: 3.6rem;
  }
  .brand-logos img {
    width: 5.2rem;
  }
  .new-header-text {
    font-size: 1.6rem;
  }
  .new.sub-heading {
    font-size: 1.2rem;
  }
  .new-ads {
    transform: translateY(-15rem);
  }
  .cards {
    margin: 1rem 10%;
  }
  .btn-new .btn,
  .btn-new .btn:link,
  .btn-new .btn:visited {
    font-size: 1.4rem;
  }
  .btn-new .btn--full:link,
  .btn-new .btn--full:visited {
    margin-right: 0rem;
  }
  .profile.grid {
    column-gap: 1rem;
  }
  .text-info {
    line-height: 1.4;
    width: 80%;
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 2.4rem;
  }
  .section-header {
    height: 54rem;
  }
  .section-header .btn,
  .section-header .btn:link,
  .section-header .btn:visited {
    font-size: 1.4rem;
  }
  .app-button {
    display: flex;
    column-gap: 1.2rem;
    justify-content: center;
  }
  .app-button a:first-child {
    margin-right: 0rem;
  }
}

/* below 464px */
@media (max-width: 29em) {
  /* .container {
    padding: 0 1.6rem;
  } */
  .header {
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    margin-bottom: 2.4rem;
  }
  .hero-text {
    font-size: 1.2rem;
  }
  .section-features {
    margin-top: 1.2rem;
  }
  .section-header {
    margin-bottom: 4.8rem;
  }
  .new-header img {
    width: 100%;
    margin: 2.4rem 0;
    transition: 0.25s all ease-in-out;
  }
  .new-header-text {
    font-size: 1.2rem;
  }
  .new.sub-heading {
    font-size: 0.8rem;
  }
  .new-ads {
    transform: translateY(-13rem);
  }
  .cards {
    width: 100%;
    margin: 1rem 0;
  }
  .categories .see-more {
    display: none;
  }
  .lists {
    flex-wrap: nowrap;
    row-gap: 3.2rem !important;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 4.8rem;
  }
  .categories ul {
    justify-content: start;
    align-items: center;
  }
  .categories li a {
    padding: 0.8rem 0.8rem;
  }
  .profile {
    width: 90%;
    margin: 1rem 5%;
    align-items: center;
    grid-template-columns: 2.5fr 4fr;
  }
  .secondary-header {
    margin-bottom: 1.4rem !important;
  }
  .profile {
    grid-template-columns: 1fr;
  }
  .profile.grid {
    row-gap: 2rem;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 100%;
    height: 24rem;
  }
  .section-about .fa-chevron-right {
    top: 70%;
  }
  .profile .info .name {
    font-size: 1.8rem;
  }
  .profile .info .position {
    font-size: 1.2rem;
  }
  .text-info {
    font-size: 1.4rem;
  }
  .get-app {
    margin: 0;
    width: 100%;
    padding: 3.6rem 1.8rem;
  }
}
</style>
