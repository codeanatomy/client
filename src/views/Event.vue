<template>
  <div class="event">
    <!-- SECTION START: carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-top: 50px">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-inline-block w-100" src="../assets/eventbanner1.jpg" alt="First slide" width="100%">
          <!-- <div data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1500"> -->
            <div class="carousel-caption d-md-block" >
              <div class="col w-100" style="color: black; background-color: white; opacity: 0.8; height: 100px">
                <h3 style="padding-top: 20px"> Bring your business to next level through new partnership and network</h3>
              </div>
            </div>
          <!-- </div> -->
        </div>
        <div class="carousel-item">
          <img class="d-inline-block w-100" src="../assets/eventbanner2.jpg" alt="First slide" width="100%">
            <div class="carousel-caption d-md-block" >
              <div class="col w-100" style="color: black; background-color: white; opacity: 0.8; height: 100px">
                <h3 style="padding-top: 20px"> New idea generation by connecting business and technology people</h3>
              </div>
            </div>
        </div>
        <div class="carousel-item">
          <img class="d-inline-block w-100" src="../assets/eventbanner3.jpg" alt="First slide" width="100%">
            <div class="carousel-caption d-md-block" >
              <div class="col w-100" style="color: black; background-color: white; opacity: 0.8; height: 100px">
                <h3 style="padding-top: 20px"> Get refreshed with foods, drinks, and new knowledge </h3>
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
    <!-- SECTION END: carousel -->

    <!-- SECTION START: UPCOMING EVENT LIST -->
    <div class="row mx-auto" style="">
      <div class="col-12 text-center mt-3">
        <div data-aos="fade-right" data-aos-duration="3000">
          <h3 >UPCOMING EVENTS:</h3>
        </div>
      </div>
      
      <div class="container">
        <h1>Essential IT Skill for Non-IT Business Leaders</h1> <hr>
        <ul class="nav nav-tabs">
            <li class="active">
                <a class="nav-link active" href="#eventdetail" data-toggle="tab">Event Detail</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#eventspeakers" data-toggle="tab">Speakers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#eventparticipants" data-toggle="tab">Participants</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#eventschedule" data-toggle="tab">Schedule</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#eventregister" data-toggle="tab">Register Now</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="eventdetail" class="container tab-pane active">
                <h3> ABOUT THE EVENT </h3>
                <p>IT can be a source of frustration for non-technical/business-background leaders. Our event “Essential IT Skill for Non-IT Business Leaders” is intended to help leaders from various backgrounds and areas of expertise to work together efficiently and productively with IT team toward future success. Taking from the speakers, who have been involved in IT and business-related roles through formal education and working experiences, all the participants can learn multiple perspectives in optimizing their existing leadership roles in working with IT team to draw better decisions, deliver more impactful result, resolve IT issues faster and use the current technology for company’s business growth in each industry.</p>
                <h5> Discussion List: </h5>
                <ul>
                    <li> Where is IT going and where does it fit into the company?</li>
                    <li> How can we think and talk effectively with IT team (e.g. programmer)?</li>
                    <li> How can we work with IT team well?</li>
                    <li> How can we develop and grow IT team inside the company?</li>
                    <li> How can we evaluate and assess the existing IT team? </li>
                </ul>
            </div>
            <div id="eventspeakers" class="container tab-pane fade">
                <h3> SPEAKER</h3>
                <h6> Coming Soon</h6>
            </div>
            <div id="eventparticipants" class="container tab-pane fade">
                <h3> PARTICIPANTS </h3>
                <ul>
                    <li>Manager and corporate strategy who want to improve their roles related to IT management </li>
                    <li> Non-technical/business background managers with IT responsibilities </li>
                    <li> IT managers who want to work productively with business-background managers/executives </li>
                    <li> Co-Founder/CEO/COO/Director </li>
                </ul>
            </div>
            <div id="eventschedule" class="container tab-pane fade">
                <h3> SCHEDULE </h3>
                <table class="table table-hover" style="text-align: center">
                    <thead>
                        <tr>
                            <td> Time </td>
                            <td> Event Detail </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 18.00 - 19.00 </td>
                            <td> Dinner </td>
                        </tr>
                        <tr>
                            <td> 19.00 - 20.30 </td>
                            <td> Sharing Session with Speakers </td>
                        </tr>
                        <tr>
                            <td> 20.30 - end </td>
                            <td> Networking and Drinking </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <div id="eventregister" class="container tab-pane fade">
                <h3> REGISTER NOW </h3>
                <p> Please register yourself through this link: COMING SOON</p>
            </div>
        </div>
      </div>


    </div>
    <!-- SECTION END: UPCOMING EVENT LIST -->


    <!-- SECTION START: PAST EVENT LIST -->
    <!-- SECTION END: PAST EVENT LIST -->
    



  </div>
</template>