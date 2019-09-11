<template>
    <div>
        <section style="background: #f1c40f; color: rgba(0, 0, 0, 0.5);">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shift">
            <router-link class="navbar-brand" to="/" style="color:black"> <img  src="../assets/logocode2.jpeg" width="120px"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <router-link class="nav-link" to="/" >Home <span class="sr-only">(current)</span></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/webdev" >Web Development</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/event" >Event Networking</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/course" >Coding Class</router-link>
                  </li>
                </ul>
                <!-- <div class="navbar-nav" >
                    <a class="nav-item nav-link active" href="#" v-if="!isLogin" > <router-link to="/" style="color:black"> Home </router-link> <span class="sr-only">(current)</span></a>
                    <router-link to="/event" style="color:black"> Event  <span class="sr-only">(current)</span> </router-link>
                    <router-link to="/course" style="color:black"> Courses  <span class="sr-only">(current)</span> </router-link>
                    <router-link to="/login/" style="color:black"> <a class="nav-item nav-link" href="#" v-if="!isLogin"  style="color:black">  Login </a> </router-link>
                    <router-link to="/login/" style="color:black"> <a class="nav-item nav-link" href="#" v-if="!isLogin"  style="color:black">  Register </a></router-link>
                    <a class="nav-item nav-link" href="#" v-if="isLogin" @click.prevent="logOut" style="color:black">Logout </a>
                </div> -->
            </div>
            <!-- <router-link to="/create"><button class="btn btn-outline-success my-2 my-sm-0 mr-3" v-if="isLogin"> Ask Question</button></router-link> -->
        </nav>
        </section>
        
    </div>
</template>

<script>
import { mapState } from "vuex";
import Swal from 'sweetalert2'

export default {
  name: 'navbar',
  computed: {
    ...mapState(["isLogin"])
  },
  created() {
    if (!localStorage.getItem('token')) {
      this.$store.commit('updateLoginState',{boolean: false})
    } else {
      this.$store.commit('updateLoginState',{boolean: true})
    }
  },
  methods: {
      logOut() {
        console.log("masuk ke konfirmasi logout")
        Swal.fire({
            title: 'Do you want to log out?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        })
        .then(result => {
          if (result.value) {
            console.log(" logout berhasil")
            localStorage.clear()
            this.$store.commit('updateLoginState',{boolean: false})
            this.$router.push('/');
          }
        })
      },
      inviteLogin() {
          Swal.fire({
            position: 'top-end',
            type: 'info',
            title: 'You need to login to add/show your cart',
            showConfirmButton: false,
            timer: 1500
        })
      },
      showAllArticle() {
        this.$router.push(`/course/`)
        // this.$store.dispatch('getAllQuestions')
        // this.$store.commit('updateAllQuestionsState', {boolean: true})
        // this.$store.commit('updateQuestionsDetailState', {boolean: false})
      }
  }
};
</script>

<style>

/* NAVIGATION */
nav {
  width: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 50px 0;
  box-shadow: 0px 5px 0px #dedede;
}
nav ul {
  list-style: none;
  text-align: center;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}
nav ul li a:hover {
  color: #555;
}


/* SHIFT */
nav.shift ul li a {
  position:relative;
  z-index: 1;
}
nav.shift ul li a:hover {
  color: #91640F;
}
nav.shift ul li a:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  content: '.';
  color: transparent;
  background: #F1C40F;
  visibility: none;
  opacity: 0;
  z-index: -1;
}
nav.shift ul li a:hover:after {
  opacity: 1;
  visibility: visible;
  height: 100%;
}

</style>