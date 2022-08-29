import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import LoginInput from "../input/loginInput";

const LoginInfo = {
  email: "",
  password: "",
};

function LoginForm() {
  const [login, setLogin] = useState(LoginInfo);
  const { email, password } = login;
  // console.log(login);
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Must be a valid email address")
      .max(255, "Email address must be less than 255 characters"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="login_wrap">
      <div className="login_1">
        <span>
          <img src="../../icons/facebook.svg" alt="" />
        </span>
        Facebook helps you connect and share with the people in your life.
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
          <Formik
            enableReinitialize
            initialValues={{
              email,
              password,
            }}
            validationSchema={loginValidation}
          >
            {(formik) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Email address or Phone number"
                  onChange={handleLoginChange}
                  bottom={false}
                />
                <LoginInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginChange}
                  bottom={true}
                />
                <div className="login_btn_wrapper">
                  <button type="submit" className="blue_btn">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <Link to="/forgot" className="forgot_password">
            Forgotten password? Reset here.
          </Link>
          <div className="sign_splitter"></div>
          <div className="create_btn_wrapper">
            <button className="blue_btn open_signup">Create Account</button>
          </div>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
