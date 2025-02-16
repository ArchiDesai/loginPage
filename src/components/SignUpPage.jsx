import React from "react";
import "../assets/signupPage.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
    emailValidation: {
      required: {
        value: true,
        message: "*email is required",
      },
      pattern: {
        value: /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/i,
        message: "*invalid email",
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
    confirmpassValidation: {
      required: {
        value: true,
        message: "*password confirmation is required",
      },
      // validate: (pass) => {
      //   return (
      //     pass === validationScheme.passwordValidation.password ||
      //     "password do not match"
      //   );
      // },
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
            password.digit.test(pass) &&
            validationScheme.passwordValidation.password ===
              validationScheme.confirmpassValidation.password) ||
          "password do not match"
        );
      },
    },
  };

  return (
    <center className="main">
      <div className="signup-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="col, username">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              {...register("username", validationScheme.nameValidation)}
            />
            <span style={{ color: "red" }}>{errors.username?.message}</span>
          </div>
          <div className="col, email">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", validationScheme.emailValidation)}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
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
          <div className="col, confirmpass">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm Password"
              {...register(
                "confirmpass",
                validationScheme.confirmpassValidation
              )}
            />
            <span style={{ color: "red" }}>{errors.confirmpass?.message}</span>
          </div>
          <div className="submit">
            <input type="submit" value="Sign up" />
          </div>
        </form>
        <div className="login">
          <h6>Already have an account?</h6>
          <Link to="/login">Log in here</Link>
        </div>
      </div>
    </center>
  );
};

export default SignUpPage;
