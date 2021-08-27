<template>
  <div class="not-found">
    <div class="container">
      <div class="card">
        <div class="img-box">
          <img src="../../src/assets/images/not-found.png" alt="" />
        </div>
        <div class="not-found-text">
          <div class="not-found-header">404</div>
          <div class="secondary-header">not found</div>
          <div class="text">The page you are looking for not available :|</div>
          <div class="btn btn--full" @click="$router.push('/')">Back Home</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.not-found {
  margin: 2.4rem 0 6.4rem 0;
  padding: 4.8rem 3.2rem;
}
.card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.img-box {
  width: 100%;
  text-align: right;
}
.img-box img {
  width: 42rem;
  height: 42rem;
}
.not-found-text {
  align-self: center;
}
.not-found-header {
  font-size: 7.2rem;
  font-weight: 900;
  color: #333;
  letter-spacing: 0.8rem;
  font-family: "Libre Baskerville", serif;
}
.secondary-header {
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
}
.text {
  font-size: 1.8rem;
  margin-bottom: 1.8rem;
}
.btn {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
.btn--full {
  background-color: #eb435f;
  color: white;
  transition: 0.3s all ease-in-out;
}

.btn--full:hover {
  background-color: #bc364c;
}
/* below 925px */
@media (max-width: 58em) {
  .img-box img {
    width: 36rem;
    height: 36rem;
  }
  .not-found-header {
    font-size: 6.4rem;
  }
  .text {
    font-size: 1.4rem;
    line-height: 1.6;
  }
  .btn {
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
  }
}

/* below 770px */
@media (max-width: 48em) {
  .img-box img {
    width: 28rem;
    height: 28rem;
  }
  .not-found-header {
    font-size: 3.6rem;
  }
  .secondary-header {
    font-size: 2.4rem;
  }
}
/* below 550px */
@media (max-width: 34em) {
  .img-box img {
    width: 20rem;
    height: 20rem;
  }
  .btn {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
}
/* below 470px */
@media (max-width: 29em) {
  .card {
    grid-template-columns: 1fr;
  }
  .img-box {
    text-align: center;
  }
  .img-box img {
    width: 12rem;
    height: 12rem;
  }
  .not-found-text {
    text-align: center;
  }
}
</style>
