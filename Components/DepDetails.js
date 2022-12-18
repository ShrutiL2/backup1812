import React, { useState, useEffect } from 'react';


const ViewDetails = () => {

    return(
        <div class="container emp-profile">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img className="imgc" alt="image" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h1 class="forh1">
                  <u>Product Details</u>
                </h1>
                <h5>abc</h5>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <p>Contact Details</p>
                
                <br></br>
                <br></br>
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>shruti</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Details</label>
                    </div>
                    <div class="col-md-6">
                      <p>details of event</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Price</label>
                    </div>
                    <div class="col-md-6">
                      <p>₹prgdrthgv</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Available offers</label>
                    </div>

                    

                    
                  </div>

                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
    );

}

export default ViewDetails