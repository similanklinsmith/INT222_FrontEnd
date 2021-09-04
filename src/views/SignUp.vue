<template>
  <div class="SignUp">
    <div class="container">
      <transition-group name="fade">
        <div class="sign-in grid" v-if="isSignUp == false">
          <div class="img-show">
            <div class="text-header">
              Welcome back!
              <div class="text-desc">
                To keep in touch with us all time, please sign in.
              </div>
              <div class="or">
                or
              </div>
              <div class="sign-btn" @click="isSignUp = true">Sign up</div>
            </div>
            <img src="../../src/assets/images/sign-up.jpg" alt="" />
          </div>
          <div class="back-btn" @click="goBack">
            <i class="fas fa-chevron-left"></i>
          </div>
          <form class="form" @submit.prevent="signIn">
            <div class="form-header">
              Sign in
            </div>
            <div class="input-email">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                v-model="email"
              />
            </div>
            <div class="input-password">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                v-model="password"
              />
            </div>
            <a href="#" class="forgot">Forgot your password?</a>
            <button class="btn btn--full" type="submit">Sign in</button>
            <div class="mobile sign-btn" @click="isSignUp = true">Sign up</div>
          </form>
        </div>
      </transition-group>

      <!-- Sign Up -->
      <transition-group name="fade">
        <div class="sign-up grid" v-if="isSignUp">
          <div class="back-btn" @click="goBack">
            <i class="fas fa-chevron-left"></i>
          </div>
          <form class="form">
            <div class="form-header">
              Create account
            </div>
            <div class="input-name">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="John" />
            </div>
            <div class="input-surname">
              <label for="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Smith"
              />
            </div>
            <div class="input-email">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </div>
            <div class="input-password">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
              />
            </div>
            <a href="" class="btn btn--full">Sign up</a>
            <div class=" mobile sign-btn" @click="isSignUp = false">
              Sign in
            </div>
          </form>
          <div class="img-show">
            <div class="text-header">
              Hello, friend!
              <div class="text-desc">
                Enter your details, and start to experience with us.
              </div>
              <div class="or">
                or
              </div>
              <div class="sign-btn" @click="isSignUp = false">Sign in</div>
            </div>
            <img src="../../src/assets/images/sign-in.jpg" alt="" />
          </div>
        </div>
      </transition-group>
    </div>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
    <div class="big-circle"></div>
    <div class="small-circle"></div>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Socials,
    Footer,
  },
  data() {
    return {
      isSignUp: false,
      email: "",
      password: ""
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    signIn(){
      this.$store.dispatch('retrieveToken',{
        email: this.email,
        password: this.password
      })
    }
  },
};
</script>
<style scoped>
.mobile {
  display: none !important;
}
.back-btn {
  z-index: 999;
  display: none !important ;
  background-color: #333;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 2.4rem;
  margin-top: 2.4rem;
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
}
.SignUp {
  position: relative;
}

.SignUp .small-circle {
  top: 25%;
  left: -5%;
}

.SignUp .big-circle {
  right: -2%;
}

.sign-up {
  margin: 3.6rem;
  grid-template-columns: 2fr 1.5fr;
  background-color: white;
  box-shadow: rgba(70, 50, 50, 0.08) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: 0.3s all ease-in-out;
}

.sign-in {
  margin: 3.6rem;
  grid-template-columns: 1.5fr 2fr;
  background-color: white;
  box-shadow: rgba(70, 50, 50, 0.08) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: 0.3s all ease-in-out;
}

.sign-up:hover,
.sign-in:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.sign-up.grid,
.sign-in.grid {
  gap: 0;
}

.img-show {
  width: 100%;
  position: relative;
  height: 100%;
}

.text-header {
  font-size: 4.8rem;
  font-family: "Libre Baskerville", serif;
  position: absolute;
  color: #fff;
  text-align: center;
  width: 100%;
  top: 35%;
}

.text-desc {
  margin: 2.4rem 20%;
  width: 60%;
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
}

.or {
  margin: 0 20%;
  width: 60%;
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  line-height: 1.4;
}
.or::before,
.or::after {
  content: "______________";
}

.img-show img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.btn,
.btn:link,
.btn:visited {
  font-family: "Lato", sans-serif !important;
  text-align: center;
  width: 60%;
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 2.4rem;
  border-radius: 2.4rem;
}

.btn--ghost:link,
.btn--ghost:visited {
  box-shadow: inset 0 0 0 1px #fff;
  color: #fff;
  transition: 0.3s all ease-in-out;
}

.btn--ghost:hover,
.btn--ghost:active {
  background-color: #fff;
  color: #333;
  box-shadow: none;
}

.sign-btn {
  font-family: "Lato", sans-serif !important;
  text-align: center;
  width: 60%;
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 2.4rem;
  border-radius: 2.4rem;
  box-shadow: inset 0 0 0 1px #fff;
  color: #fff;
  transition: 0.3s all ease-in-out;
}

.sign-btn:hover {
  background-color: #fff;
  color: #333;
  box-shadow: none;
}

.form {
  margin: 6rem 2.4rem 3.6rem 2.4rem;
  /* width: 100%; */
  text-align: center;
  align-content: center;
}

.form-header {
  font-size: 4.2rem;
  font-weight: 700;
  color: #333;
  font-family: "Libre Baskerville", serif;
  margin: 3.6rem 0;
  width: 100%;
}

.input-email,
.input-password,
.input-name,
.input-surname {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 3.2rem 20%;
}

.input-email label,
.input-password label,
.input-name label,
.input-surname label {
  text-align: left;
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 1.2rem;
}

.input-email input,
.input-password input,
.input-name input,
.input-surname input {
  width: 100%;
  height: 3.6rem;
  background: rgba(211, 211, 211, 0.25);
  border: none;
  padding: 0 0.8rem;
}

.input-email input:focus,
.input-password input:focus,
.input-name input:focus,
.input-surname input:focus {
  outline: none;
}

.input-email input::placeholder,
.input-password input::placeholder,
.input-name input::placeholder,
.input-surname input::placeholder {
  color: rgb(85, 85, 85, 0.35);
}

.forgot {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 4.8rem;
  display: block;
}

a:link,
a:visited {
  text-decoration: none;
  transition: 0.2s all ease-in-out;
}

a:hover,
a:active {
  color: #555;
}

.btn--full,
.btn--full:visited {
  width: 26rem;
  background-color: #eb435f;
  color: white;
  transition: 0.3s all ease-in-out;
}

.btn--full:hover,
.btn--full:active {
  background-color: #bc364c;
}

@media (max-width: 62em) {
  .form {
    margin: 6rem 0 3.6rem 0;
  }
  .text-header {
    font-size: 3.2rem;
  }
  .text-desc {
    margin: 2.4rem 10%;
    width: 80%;
    font-size: 1.2rem;
  }
  .or {
    font-size: 1.2rem;
  }
  .form-header {
    font-size: 3.6rem;
  }
}
@media (max-width: 47em) {
  .text-header {
    font-size: 2.8rem;
  }
  .or {
    font-size: 1rem;
  }
  .form-header {
    font-size: 3.2rem;
  }
}

@media (max-width: 40em) {
  .sign-up {
    display: flex;
    flex-direction: column-reverse;
  }

  .sign-in {
    display: flex;
    /* flex-direction: column-reverse; */
    flex-direction: column;
  }
  .img-show {
    width: 100%;
    position: relative;
    height: 36rem;
  }
  .img-show img[data-v-6f83b81c] {
    width: 100%;
    height: 100%;
  }
}

/* below 470px */
@media (max-width: 29em) {
  .back-btn {
    display: flex !important;
  }
  .container {
    padding: 0 !important;
    position: relative;
  }
  footer {
    display: none;
  }
  .sign-in {
    margin: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateY(-7rem);
  }
  .sign-up {
    flex-direction: column;
    margin: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateY(-7rem);
    background-color: #eb435f;
  }
  .sign-up .form-header{
    color: white;
  }
  .sign-up .input-email label,
  .sign-up .input-password label,
  .sign-up .input-name label,
  .sign-up .input-surname label {
    color: white;
  }

  .sign-up .input-email input::placeholder,
  .sign-up .input-password input::placeholder,
  .sign-up .input-name input::placeholder,
  .sign-up .input-surname input::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }
  .sign-up .btn--full,
.sign-up .btn--full:visited {
  width: 26rem;
  background-color: white;
  color: #333;
  transition: 0.3s all ease-in-out;
}

.sign-up .btn--full:hover,
.sign-up .btn--full:active {
  background-color: rgba(255, 255, 255, 0.35);
}
  .img-show {
    display: none;
  }
  .mobile {
    display: inline-block !important;
  }
  .mobile.sign-btn {
    box-shadow: inset 0 0 0 1px #333;
    color: #333;
  }
}
</style>
