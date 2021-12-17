import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/index";
import type { ChangeEvent, MouseEvent } from "react";
import { callApi } from "../../utils";
import { toast } from "react-toastify";

const LoginForm: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<any>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [redirect, setRedirect] = useState<any>("");

  const dispatch = useDispatch();
  const { login, storeToken, storeUser } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!loginDetails.email || !loginDetails.password) {
      return setError("Please fill in all fields!");
    }

    setError("");

    setLoading(true);

    const payload = {
      email: loginDetails.email,
      password: loginDetails.password,
    };

    callApi(`/login`, payload, "post")
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
        return toast.error(err);
      });
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <div className="center-content">
        <div className="login-form" data-test="login-form">
          <div className="reset-container">
            <h3 className="mb-0 logo-text">Login</h3>
            <div className="text-muted mt-3">Login to your account</div>
            <br />
            <label className="lmb-5">Email</label>
            <input
              placeholder={"Email"}
              name={"email"}
              type={"email"}
              onChange={(e) => onChangeText(e)}
              value={loginDetails.email}
              id="email"
              disabled={loading}
              className="event-input"
              required
              data-test="login-input-email"
            />
            <br />
            <label className="lmb-5">Password</label>
            <input
              placeholder={"Password"}
              name={"password"}
              type={"password"}
              onChange={(e) => onChangeText(e)}
              value={loginDetails.password}
              id="pass"
              disabled={loading}
              className="event-input"
              required
              data-test="login-input-password"
            />
            {error ? <span className="error-msg">{error}</span> : ""}
            <button
              disabled={false}
              className="search-btn pass mt-5"
              onClick={(e) => onSubmit(e)}
            >
              Login
              {loading ? <i className="fas fa-spinner fa-spin"></i> : ""}
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

export default LoginForm;
