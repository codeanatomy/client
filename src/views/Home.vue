<template>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-inline-block w-100" src="../assets/logocode.jpeg" alt="First slide" height="600px">
          <div class="carousel-caption d-none d-md-block" >
            <div class="col w-100" style="color: black; background-color: white; opacity: 0.7">
              <router-link to="/products"><h1>APPLY NOW</h1></router-link>
              <h3>Summer Bootcamp 1 - 5 July 2019</h3>
            </div>
          </div>
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
    <div class="row " style="background:black">
      <div class="col-6 offset-5 align-items-center mt-3">
        <h3 style="color: white">Curriculum</h3>
      </div>
      <div class="col-11 mx-5 mb-5">
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">HTML & CSS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Javascript</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">HTML & CSS</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Tell Me More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      
      <h3>The way we work</h3>
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
