<template>
  <div class="Users">
    <div class="container">
      <div class="sub-heading">See all users</div>
      <div class="secondary-header">Users List</div>
      <div class="grid grid--2-cols users-section">
        <div class="form">
          <div class="side-img">
            <img src="../../src/assets/images/side-img-user.jpg" alt="" />
            <div class="text">
              <div class="header">Manage admin</div>
              <div class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div class="add-user">
            <div class="name">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John" />
            </div>
            <div class="surname">
              <label for="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Smith"
              />
            </div>
            <div class="email">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="example@mail.com"
              />
            </div>
            <div class="password">
              <label for="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="123456879"
              />
            </div>
            <div class="role">
              <label for="role">Role</label>
              <select name="role" id="role">
                <option value="admin">Admin</option>
                <option value="deputy admin">Deputy Admin</option>
              </select>
            </div>
            <div class="btn btn--full">
              Add
            </div>
          </div>
        </div>
        <transition-group name="fade">
          <!-- component -->
          <List v-for="user in getAllUsers" :key="user.id" :user="user"></List>
          <!-- -------- -->
        </transition-group>
      </div>
    </div>
    <Socials class="socials"></Socials>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Socials from "@/components/Socials.vue";
import Footer from "@/components/Footer.vue";
import List from "@/components/List.vue";
import { mapGetters , mapActions} from 'vuex';
export default {
  name: "Users",
  components: {
    Socials,
    Footer,
    List,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
        ...mapActions([
      "getAccountsToSite",
    ]),
  },
    computed: mapGetters([
    "getAccounts",
  ]),
  computed: {
    getAllUsers() {
      return this.$store.getters.getAccounts;
    }
  },
  created() {
    this.getAccountsToSite();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.Users {
  margin: 3.6rem 0 4.8rem 0;
}

.container {
  margin-bottom: 4.8rem;
}
.grid {
  gap: 3.6rem;
}
.form {
  margin: 0 10%;
  width: 80%;
  background-color: white;
  height: 48rem;
  /* padding: 2rem 4rem; */
  grid-column: span 2;
  display: grid;
  grid-template-columns: 60fr 40fr;
  column-gap: 2.4rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.add-user {
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 2rem 2rem;
  height: 100%;
}
label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
}

input {
  width: 100%;
  border: none;
  background: rgba(211, 211, 211, 0.25);
  height: 2.8rem;
  padding: 0 0.8rem;
  color: #333;
  margin-bottom: 2rem;
  height: 3.6rem;
}
input:focus {
  outline: none;
}

input::placeholder {
  color: rgb(85, 85, 85, 0.35);
}
.side-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.side-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 80%;
  margin: 0 10%;
}
.text .header {
  font-size: 4.2rem;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Libre Baskerville", serif;
  margin-bottom: 1.2rem;
}

.text .info {
  font-size: 1.4rem;
  color: #fff;
  line-height: 1.4;
}
.btn {
  text-align: center;
  width: 100%;
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1.2rem 2.4rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  margin-top: 2.4rem;
  transition: 0.25s all ease-in-out;
}

.btn--full {
  background-color: #32cd32;
  color: #fff;
}
.btn--full:hover {
  background-color: #3df53d;
}

@media (max-width: 53em) {
  .form {
    display: grid;
    grid-template-columns: 1fr;
    height: 72rem;
  }
  .side-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}

/* below 680px */
@media (max-width: 43em) {
  .grid--2-cols {
    display: flex;
    flex-direction: column;
  }
  .grid {
    gap: 2.4rem;
  }
  .text .header {
    font-size: 3.2rem;
  }
  .text .info {
    font-size: 1.2rem;
  }
}
  /* below 470px */
  @media (max-width: 29em) {
    .text .header {
      font-size: 2.4rem;
    }
    .text .info {
      font-size: 1rem;
    }
  }
</style>
