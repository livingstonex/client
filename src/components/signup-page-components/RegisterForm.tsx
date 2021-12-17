import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/index";
import type { ChangeEvent, MouseEvent } from "react";
import { callApi } from "../../utils";
import { toast } from "react-toastify";
import CustomTextInput from "../utilities/CustomTextInput";

const RegisterForm: React.FC = () => {
  const [userDetails, setUserDetails] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [redirect, setRedirect] = useState<any>("");

  const dispatch = useDispatch();
  const { login, storeUser, storeToken } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loading) return;

    if (
      !userDetails.firstname ||
      !userDetails.lastname ||
      !userDetails.email ||
      !userDetails.password
    ) {
      return setError("Please fill in all fields!");
    }

    setError("");

    setLoading(true);

    const payload = {
      firstname: userDetails.firstname,
      lastname: userDetails.lastname,
      email: userDetails.email,
      password: userDetails.password,
    };

    callApi(`/signup`, payload, "post")
      .then((res: any) => {
        login();
        storeToken(res.token);
        storeUser(res.user.id);
        setLoading(false);
        setRedirect("/events");
        return toast.success("Success");
      })
      .catch((err) => {
        setLoading(false);
        console.log("Sign Up err: ", err);
        return toast.error(err);
      });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <div className="center-content">
        <div className="register-form" data-test="register-form">
          <div className="reset-container">
            <h3 className="mb-0 logo-text">Sign Up</h3>
            <div className="text-muted mt-3">Get your new account</div>
            <br />
            <CustomTextInput
              label="First Name:"
              loading={loading}
              value={userDetails.firstname}
              onChange={onChangeText}
              name="firstname"
              placeholder="firstname..."
              type="text"
              data-test="register-input-firstname"
            />
            <br />
            <CustomTextInput
              label="Last Name:"
              loading={loading}
              value={userDetails.lastname}
              onChange={onChangeText}
              name="lastname"
              placeholder="lastname..."
              type="text"
              data-test="register-input-lastname"
            />
            <br />
            <CustomTextInput
              label="Email:"
              loading={loading}
              value={userDetails.email}
              onChange={onChangeText}
              name="email"
              placeholder="email..."
              type="text"
              data-test="register-input-email"
            />
            <br />
            <CustomTextInput
              label="Password:"
              loading={loading}
              value={userDetails.password}
              onChange={onChangeText}
              name="password"
              placeholder="password..."
              type="password"
              data-test="register-input-password"
            />

            {error ? <span className="error-msg">{error}</span> : ""}
            <button
              disabled={false}
              className="search-btn pass mt-5"
              onClick={(e) => onSubmit(e)}
            >
              Register
              {loading ? <i className="fas fa-spinner fa-spin ml-5"></i> : ""}
            </button>
          </div>
          <div className="text-muted mt-5">
            © Eventings Inc | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
