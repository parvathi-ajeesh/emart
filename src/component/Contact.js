import React from "react";

const Contact = () => {
  return (
    <div 
    style={
    {backgroundImage:'url(/assets/contacts.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "250px"
    }}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center my-3" style={{marginLeft:'250px'}}>
            <h1>Have Some Questions..?</h1>
           
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            
          </div>
          <div className="col-md-6">
            <form style={{MarginTop:'20px'} }>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="mail-id"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Share your Concerns
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark" style={{marginLeft:'250px'}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
