<template>
  <div class="home">
    <!-- SECTION START: carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-top: 50px">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-inline-block w-100" src="../assets/homebanner1.jpg" alt="First slide" width="100%">
        </div>
        <div class="carousel-item">
          <img class="d-inline-block w-100" src="../assets/homebanner2.jpg" alt="Second slide" width="100%">
        </div>
        <div class="carousel-item">
          <img class="d-inline-block w-100" src="../assets/homebanner3.jpg" alt="Third slide" width="100%">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- SECTION END: carousel -->

    <!-- NEW SECTION: SERVICES -->
    <div class="container">
      <div class="col-12 text-center mt-3">
        <div data-aos="fade-right" data-aos-duration="3000">
          <h3>OUR SERVICES</h3>
        </div>
      </div>
      <div class="row mb-3">
          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up-right" data-aos-duration="3000">
              <div class="card bg-dark text-white">
                <img src="../assets/homebannerwebdev.jpg" class="card-img" alt="class">
                <div class="card-img-overlay" style="text-align: center;">
                  <router-link to="/webdev"><h6 class="card-title" style="color: white; background-color: grey; opacity: 0.8; padding-top: 10px; padding-bottom: 10px">Website Development</h6></router-link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div class="card bg-dark text-white">
                <img src="../assets/homebannerevent.jpg" class="card-img" alt="class">
                <div class="card-img-overlay" style="text-align: center;">
                  <router-link to="/event">
                    <h6 class="card-title" style="color: white; background-color: grey; opacity: 0.8; padding-top: 10px; padding-bottom: 10px">Networking Event</h6>
                  </router-link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up-left" data-aos-duration="3000">
              <div class="card bg-dark text-white">
                <img src="../assets/homebannerclass.jpg" class="card-img" alt="class">
                <div class="card-img-overlay" style="text-align: center;">
                  <router-link to="/course">
                    <h6 class="card-title" style="color: white; background-color: grey; opacity: 0.8; padding-top: 10px; padding-bottom: 10px">Coding Bootcamp for High School</h6>
                  </router-link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
