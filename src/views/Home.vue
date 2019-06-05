<template>
  <div class="home">

    <!-- SECTION START: carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-top: 50px">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-inline-block w-100" src="../assets/mainbanner1.png" alt="First slide" height="600px">
          <!-- <div data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1500"> -->
            <div class="carousel-caption d-md-block" >
              <div class="col w-100" style="color: black; background-color: white; opacity: 0.7">
                <a href="https://forms.gle/Ks4w6RFPCPskK9yP7" target="_blank" style="color: #9b870c"><h1>APPLY NOW</h1></a>
                <h3> Jakarta Summer Javascript Bootcamp, 1 - 5 July 2019</h3>
              </div>
            </div>
          <!-- </div> -->
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

    <!-- SECTION START: ABOUT CODE ANATOMY -->
    <div class="row mx-auto" style="background:black">
      <div class="col-12 text-center mt-3">
        <div data-aos="fade-right" data-aos-duration="3000">
          <h3 style="color: white">ABOUT CODE ANATOMY</h3>
        </div>
      </div>

      <div class="row mb-3 mx-auto">
        <div class="col-lg-6 col-md-12">
          <div data-aos="flip-left" data-aos-duration="3000">
            <div class="card indigo z-depth-2">
              <div class="card-body">
                <h3 class="text-uppercase font-weight-bold text-center amber-text mt-2 mb-3"><strong>WHY COMPUTER SCIENCE</strong><i class="far fa-heart ml-3"></i></h3>
                <p class="white-text mb-0">
                  <ul>
                    <li> <strong> Improved Hiring Prospects: </strong> one of the highest salaries for fresh graduate students</li>
                    <li> <strong> A lot of companies need: </strong> more computing jobs available than there are qualified people to fill them </li>
                    <li> <strong> Unlimited future opportunities: </strong> building the next unicorn startup? digitalization of multinational companies? POSSIBLE!</li>
                    <li> <strong> Strengthening your main major choice: </strong> Want to follow your dream of working in the arts or health care or education? You can still major (or minor or have a concentration) in Computer Science</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div data-aos="flip-right" data-aos-duration="3000">
            <div class="card indigo z-depth-2">
              <div class="card-body">
                <h3 class="text-uppercase  text-center font-weight-bold amber-text mt-2 mb-3"><strong> WHY JOIN OUR BOOTCAMP </strong><i class="far fa-heart ml-3"></i></h3>
                <p class="white-text mb-0">
                  <ul>
                    <li> <strong> Gain Productive holiday: </strong> Imagine he/she can make a website during holiday</li>
                    <li> <strong> Improve the interest to computer science: </strong> We will prove that computer science is very fun </li>
                    <li> <strong> Make you smarter than other: </strong> Equip them with fundamental knowledge of programming to help them soar in the college and get the optimum score to choose their preferred universities</li>
                    <li> <strong> Mental Toughness: </strong> Gain a strong mentality needed for fast-paced and highly demanded modern world, especially being as a programmer in this digital industry </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- SECTION END: ABOUT CODE ANATOMY -->

    <!-- NEW SECTION: CURRICULUM -->
    <div class="container">
      <div class="col-12 text-center mt-3">
        <div data-aos="fade-right" data-aos-duration="3000">
          <h3>OUR CURRICULUM</h3>
        </div>
      </div>
      <div class="row mb-3">
          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up-right" data-aos-duration="3000">
              <div class="card ">
                  <div class=" card-header text-center">
                    Basic Knowledge of Website
                  </div>
                  <div class="card-body">
                    <h4 class="card-title text-center">HTML & CSS</h4>
                    <p class="card-text">
                      <ul>
                        <li> Learn HTML structure</li>
                        <li> Learn elements in HTML</li>
                        <li> Enable CSS to your website </li>
                      </ul>
                    </p>
                    <div class="text-center">
                      <router-link to="/products" class="btn btn-warning">Learn More</router-link>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up" data-aos-duration="3000">
              <div class="card">
                  <div class=" card-header text-center">
                    The Most Used Programming Language
                  </div>
                  <div class="card-body">
                    <h4 class="card-title text-center"> Javascript </h4>
                    <p class="card-text">
                      <ul>
                        <li> Data Type in Javascript</li>
                        <li> Operational in Javascript</li>
                        <li> Control Flow </li>
                      </ul>
                    </p>
                    <div class="text-center">
                      <a class="btn btn-warning text-center">Learn More</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up-left" data-aos-duration="3000">
              <div class="card">
                  <div class=" card-header text-center">
                    Get Your Knowledge to the Sky
                  </div>
                  <div class="card-body">
                    <h4 class="card-title text-center"> Database </h4>
                    <p class="card-text">
                      <ul>
                        <li> Basic Realtime Database </li>
                        <li> Get your domain </li>
                        <li> Website Deployment </li>
                      </ul>
                    </p>
                    <div class="text-center">
                      <a class="btn btn-warning"> Learn More </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <!-- NEW SECTION: RESULT -->
    <div class="row mx-auto" style="background:black">
      <div class="col-6 offset-5 align-items-center mt-3">
        <div data-aos="fade-right" data-aos-duration="3000">
          <h3 style="color: white"> BOOTCAMP RESULTS </h3>
        </div>
      </div>
      <div class="col-12">
        <div data-aos="zoom-in-up" data-aos-duration="3000">
          <div class="row mb-5">
            <div class="col-lg-6 col-md-12 ml-5">
              <div class="card text-white bg-dark" >
                <div class="card-body">
                  <h4 class="card-title"> Your Handmade Website: <i class="fas fa-trophy"></i> </h4>
                  <p class="card-text">
                    <ul>
                      <li> A website to promote you</li>
                      <li> A strong fondation to build other sophisticated website </li>
                    </ul>
                  </p>
                  <p>
                    <button class="btn btn-warning" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Example Website to Build</button>
                  </p>
                  <div class="row">
                    <div class="col">
                      <div class="card collapse multi-collapse" id="multiCollapseExample1">
                        <a href="https://hermsz.github.io/" target="_blank" style="color:black; text-align:center">Website 1: Hotel Website (Static Page) </a>
                        <div class="box">
                          <img src="../assets/websitepreview1.jpg" width = "100%" height = "200px" />
                        </div>
                        <div class="card card-body" style="color: black">
                          Let people know that you run a hotel and let them book your hotel using available booking channel.
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class=" card collapse multi-collapse" id="multiCollapseExample2">
                        <a href="https://williamsuryawan.github.io/" target="_blank" style="color:black; text-align:center">Website 2: Watch Collection (Static Page)</a>
                        <div class="box">
                          <img src="../assets/websitepreview2.jpg" width = "100%" height = "200px" />
                        </div>
                        <div class="card card-body" style="color: black">
                          You have a business and you want to present all available products that you can sell on a website.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div class="col-12">
        <div data-aos="zoom-in-up" data-aos-duration="3000">
          <div class="row justify-content-end mb-5">
            <div class="col-lg-6 col-md-12 mr-5">
              <div class="card bg-warning" >
                <div class="card-body">
                  <h4 class="card-title">Quiz & Self-Assessment Test: <i class="fas fa-poll"></i> </h4>
                  <p class="card-text">
                    <ul>
                      <li>Are you curious about how computers and humans communicate?</li>
                      <li>Do you consider yourself imaginative?</li>
                      <li>Do you enjoy solving problems?</li>
                      <li>Are you interested in computer programming?</li>
                      <li>Do you communicate well?</li>
                      <li>Do you consider yourself a team player?</li>
                      <li>Are you detail oriented?</li>
                      <li>Are you fascinated by how computers function?</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-12 mb-3">
        <div class="text-center">
          <a href="https://forms.gle/Ks4w6RFPCPskK9yP7" target="_blank" class="btn btn-danger text-center"><h1>APPLY NOW</h1></a>
        </div>
      </div>
    </div>
    <!-- END SECTION: RESULT -->

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
