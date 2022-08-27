import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import LoginInput from "../../components/input/loginInput";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <span>
              <img src="../../icons/facebook.svg" alt="" />
            </span>
            Facebook helps you connect and share with the people in your life.
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik>
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email address or Phone number"
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <button type="submit" className="blue_btn">
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten password? Reset here.
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page</b> for a celebrity, brand or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}

export default Login;
