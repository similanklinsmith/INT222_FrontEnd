<template>
  <div>
    <div id="nav">
      <div class="logo"><span>NERDY</span>STYLE</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">New</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">Stores</router-link>
        <router-link to="/about">Sign up</router-link>
        <!-- <router-link to="/about"><i class="fas fa-sun"></i></router-link> -->
      </div>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
#nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3.2rem 4.8rem;
  align-items: center;
  height: 7.2rem;
  z-index: 999;
}

.logo {
  padding-left: 4.8rem;
  font-weight: 900;
  font-size: 2.4rem;
  color: #333;
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

.nav-links a:last-child{
  background-color: #eb435f;
  padding: 0.8rem 1.2rem;
  color: white;
}

.nav-links a:not(last-child){
  color: #444;
}

.nav-links a:last-child:hover{
  background-color:  transparent;
  box-shadow: inset 0 0 0 1px #eb435f;
}

.nav-links a:link,
.nav-links a:visited {
  text-decoration: none;
  transition: 0.3s all ease-in-out;
}

.nav-links a:hover {
  color: #eb435f;
}

.nav-links a.router-link-exact-active {
  color: #eb435f;
}

.nav-links a:last-child.router-link-exact-active {
  color: #444;
}
</style>
