import React from "react";
import "../assets/loginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationScheme = {};

  return (
    <center className="main">
      <div className="login-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="col, username">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div className="col, password">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Log in" />
            {/* <input type="button" value="Log in" /> */}
          </div>
        </form>
        <div className="forgot-pass">
          <a href="">Forgot password?</a>
        </div>
        <div className="signup">
          <h6>Don't have an account?</h6>
          <a href="">Sign up here</a>
        </div>
      </div>
    </center>
  );
};

export default LoginPage;
