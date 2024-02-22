import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import '../styles/Login.css'

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form">
      <form className='form' onSubmit={handleSubmit}>
        <div className="name">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

        <div className="mail">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
       
        <div className="pswrd">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <div className="google">
        <GoogleOAuthProvider clientId="794327444172-3pa9ri27eglugu9305obef4lgpi6d14g.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  );
};

export default Login;
