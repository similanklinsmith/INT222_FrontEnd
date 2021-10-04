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
            <div class="username">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Smith123"
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
        <div class="filter">
          <div class="role-filter">
            <label for="colors">ROLES</label>
            <select v-model="selectedRole">
              <option value="">none</option>
              <option value="Admin">Admin</option>
              <option value="Deputy Admin">Deputy Admin</option>
              <option value="Member">Member</option>
            </select>
          </div>
          <div class="role-filter-mb">
            <div
              class="filter-mb admin-filter"
              :style="[
                adminFilter == true || selectedRole == 'Admin'
                  ? { backgroundColor: '#ffd700', color: 'white' }
                  : { backgroundColor: '#ddd', color: '#white' },
              ]"
              @click="filterAdmin"
            >
              Admin
            </div>
            <div
              class="filter-mb deputy-admin-filter"
              :style="[
                deputyAdminFilter == true || selectedRole == 'Deputy Admin'
                  ? { backgroundColor: '#FF6347', color: 'white' }
                  : { backgroundColor: '#ddd', color: '#white' },
              ]"
              @click="filterDeputyAdmin"
            >
              Deputy Admin
            </div>
            <div
              class="filter-mb member-filter"
              :style="[
                memberFilter == true || selectedRole == 'Member'
                  ? { backgroundColor: '#9400D3', color: 'white' }
                  : { backgroundColor: '#ddd', color: '#white' },
              ]"
              @click="filterMember"
            >
              Member
            </div>
          </div>
          <input
            type="text"
            class="search"
            placeholder="Search by username"
            v-model="searchInput"
          />
        </div>
        <transition-group name="fade">
          <!-- component -->
          <List
            class="List"
            v-for="user in queryUsers"
            :key="user.id"
            :user="user"
            @deleteAccountById="handleDelete"
          ></List>
        </transition-group>
        <transition-group name="slide-fade">
          <Table :ths="ths" class="table" :key="ths">
            <tbody v-for="(user, index) in queryUsers" :key="user.id">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.role.role_name }}</td>
                <td>
                  <div
                    class="delete"
                    @click="deleteAccount(user.id)"
                    :style="{ display: 'inline' }"
                  >
                    Delete
                  </div>
                  |
                  <div
                    class="edit"
                    @click="toggleEditColor(color.id)"
                    :style="{ display: 'inline' }"
                  >
                    Edit
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
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
import Table from "@/components/Table.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  components: {
    Socials,
    Footer,
    List,
    Table,
  },
  data() {
    return {
      spareUsers: [
        {
          first_name: "Similan",
          last_name: "Klinsmith",
          username: "deep",
          email: "deep@gmail.com",
          password: "62130500096",
          role: {
            role_name: "admin",
          },
          id: 1,
        },
        {
          first_name: "Praepanwa",
          last_name: "Tedprasit",
          username: "phaeng",
          email: "phaeng@gmail.com",
          password: "62130500069",
          role: { role_name: "deputy admin" },
          id: 2,
        },
        {
          first_name: "Noparat",
          last_name: "Prasongdee",
          username: "saimai",
          email: "saimai@gmail.com",
          password: "62130500126",
          role: { role_name: "member" },
          id: 3,
        },
      ],
      users: [],
      searchInput: "",
      selectedRole: "",
      adminFilter: false,
      deputyAdminFilter: false,
      memberFilter: false,
      ths: [
        "No",
        "First Name",
        "Last Name",
        "Username",
        "Email",
        "Password",
        "Role",
      ],
    };
  },
  methods: {
    ...mapActions(["getAccountsToSite"]),
    filterAdmin() {
      this.deputyAdminFilter = false;
      this.memberFilter = false;
      this.adminFilter = !this.adminFilter;
      if (this.adminFilter ) {
        this.selectedRole = "Admin";
      } else {
        this.selectedRole = "";
      }
    },
    filterDeputyAdmin() {
      this.adminFilter = false;
      this.memberFilter = false;
      this.deputyAdminFilter = !this.deputyAdminFilter;
      if (this.deputyAdminFilter) {
        this.selectedRole = "Deputy Admin";
      } else {
        this.selectedRole = "";
      }
    },
    filterMember() {
      this.adminFilter = false;
      this.deputyAdminFilter = false;
      this.memberFilter = !this.memberFilter;
      if (this.memberFilter) {
        this.selectedRole = "Member";
      } else {
        this.selectedRole = "";
      }
    },
    deleteAccount(id) {
      if (confirm("Do you really want to delete? 😲")) {
        this.$store.dispatch("deleteAccount", id);
        // this.$router.push("/stores");
      }
    },
    handleDelete(id) {
      this.getAllUsers = this.getAllUsers.filter((user) => {
        return user.id != id;
      });
    },
  },
  computed: mapGetters(["getAccounts"]),
  computed: {
    getAllUsers() {
      return this.$store.getters.getAccounts;
    },
    // queryUsers() {
    //   return this.getAllUsers.filter((user) => {
    //     return (
    //       user.role.role_name
    //         .toLowerCase()
    //         .includes(this.selectedRole.toLowerCase()) &&
    //       user.username.toLowerCase().includes(this.searchInput)
    //     );
    //   });
    // },
    queryUsers() {
      return this.spareUsers.filter((user) => {
        return (
          user.role.role_name
            .toLowerCase()
            .includes(this.selectedRole.toLowerCase()) &&
          user.username.toLowerCase().includes(this.searchInput)
        );
      });
    },
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
  height: 58rem;
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
.filter {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 60fr 40fr;
  column-gap: 2.4rem;
}
.filter input,
.filter select {
  height: 3.2rem;
  margin-bottom: 0;
  background-color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
}

.filter .role-filter {
  display: flex;
  justify-content: right;
  align-self: center;
}
.filter .role-filter label {
  align-self: center;
  margin-right: 1.2rem;
  margin-bottom: 0;
}
.role-filter-mb {
  display: none;
}
.filter-mb {
  /* width: 3.6rem; */
  height: 3.6rem;
  background-color: #fff;
  font-size: 1.4rem;
  padding: 1rem 1.2rem;
  color: white;
  text-transform: capitalize;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
}
.filter-mb:hover {
  filter: saturate(100%);
}
.List {
  display: none;
}
.table {
  grid-column: span 2;
}
tbody {
  font-size: 1.4rem;
  text-align: center;
  background-color: #fff;
  transition: 0.2s all ease-in-out;
}
tbody td {
  padding: 1.4rem;
  line-height: 1.8;
}
tbody:hover {
  background-color: rgb(245, 244, 244);
}
tbody td:nth-child(4) {
  height: 8rem;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.delete,
.edit {
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
.delete:hover {
  color: #eb435f;
}
.edit:hover {
  color: #ffd700;
}
label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
}

input {
  width: 100%;
  border: none;
  background: rgba(211, 211, 211, 0.45);
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
@media (max-width: 55em) {
  .table {
    display: none;
  }
  .List {
    display: inline;
  }
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
  .filter .search {
    grid-column: span 2;
    width: 80%;
    margin: 0 10%;
  }
  .filter .search {
    grid-row: 1;
  }
  .filter .role-filter {
    display: none;
  }
  .role-filter-mb {
    grid-column: span 2;
    justify-self: center;
    justify-items: center;
    justify-content: center;
    display: flex;
    column-gap: 1.2rem;
    width: 90%;
    margin: 1.2rem 10% 0 10%;
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
