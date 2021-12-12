import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators, State} from "../../redux/index";
import type { ChangeEvent } from "react";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<any>('');

    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionCreators, dispatch);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        // const { email, }
        // setVal(e.target.value);
        // this.setState({ val: e.target.value });
    };


  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <div className="center-content">
        <div className="login-form">
            <div className="reset-container">
              <h3 className="mb-0 logo-text">Login</h3>
              <div className="text-muted mt-3">Login to your account</div>
              <br />
              <label className="lmb-5">Email</label>
              <input
                placeholder={'Email'}
                name={'email'}
                type={'email'}
                onChange={(e) => onChange(e)}
                value={email}
                // className="new-pass"
                id="email"
                // disabled={loading}
                required
              />
              <br />
              <label className="lmb-5">Password</label>
              {/* <div className="new-password-box"> */}
             <input
                placeholder={'Password'}
                name={'password'}
                type={'password'}
                onChange={(e) => onChange(e)}
                value={password}
                // className="new-pass"
                id="pass"
                // disabled={loading}
                required
              />
          {/* </div> */}
              {/* {error ? (
                      <span className="error-msg">{error}</span>
                    ) : '' } */}
              <button disabled={false} className="search-btn pass mt-5" onClick={()=>{}}>
                Login
                {/* <LoadingDots loading={loading} /> */}
              </button>
            </div>
            <div className="text-muted mt-5">© Eventings Inc | All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
