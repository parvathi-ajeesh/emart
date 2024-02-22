import React from "react";

const Register = () => {
  return (
    <div>
      <form className="mb-5"
      style={{
        marginTop:'20px',
        //display:"flex",
        justifyContent:'center',
        flexDirection:"row"
      }}
      >
        <div className="mb-5">
          <label htmlFor="exampleInput" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="exampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-primary w-100 mt-5">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
