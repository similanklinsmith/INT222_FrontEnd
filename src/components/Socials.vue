<template>
  <div class="socials">
    <a href="#"><i class="icon fab fa-facebook-square"></i></a>
    <a href="#"><i class="icon fab fa-instagram-square"></i></a>
    <a href="#"> <i class="icon fab fa-twitter-square"></i></a>
  </div>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<style scoped>
.socials {
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  overflow: hidden;
}

.icon{
  width: 2.4rem;
  height: 2.4rem;
  color: #333;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
} 

.icon:hover{
  transform: scale(1.2);
  color: #bc364c;
}

/* below 588px */
@media (max-width: 37em) {
  .socials{
    display: none;
  }
}
</style>
