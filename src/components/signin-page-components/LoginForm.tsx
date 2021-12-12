import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators, State} from "../../redux/index";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<any>('');

    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionCreators, dispatch);

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        
    }


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
                onChange={(e) => onChangeEmail(e)}
                value={email}
                id="email"
                disabled={loading}
                required
              />
              <br />
              <label className="lmb-5">Password</label>
             <input
                placeholder={'Password'}
                name={'password'}
                type={'password'}
                onChange={(e) => onChangePassword(e)}
                value={password}
                id="pass"
                disabled={loading}
                required
              />
              {error ? (
                      <span className="error-msg">{error}</span>
                    ) : '' } 
              <button disabled={false} className="search-btn pass mt-5" onClick={(e) => onSubmit(e) }>
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
