import React from "react";
import "../assets/loginPage.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationScheme = {
    nameValidation: {
      required: {
        value: true,
        message: "*name is required",
      },
    },
    passwordValidation: {
      required: {
        value: true,
        message: "*password is required",
      },
      minLength: {
        value: 8,
        message: "*minimum legth is 8",
      },
      validate: (pass) => {
        const password = {
          capital: /(?=.*[A-Z])/,
          length: /(?=.{7,40}$)/,
          specialChar: /[ -\/:-@\[-\`{-~]/,
          digit: /(?=.*[0-9])/,
        };
        return (
          (password.capital.test(pass) &&
            password.length.test(pass) &&
            password.specialChar.test(pass) &&
            password.digit.test(pass)) ||
          "enter valid password"
        );
      },
    },
  };

  return (
    <center className="main">
      <div className="login-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <h3>Log In</h3>
          <div className="col, username">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              {...register("username", validationScheme.nameValidation)}
            />
            <span style={{ color: "red" }}>{errors.username?.message}</span>
          </div>
          <div className="col, password">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              {...register("password", validationScheme.passwordValidation)}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
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
          <Link to="/">Sign up here</Link>
        </div>
      </div>
    </center>
  );
};

export default LoginPage;
