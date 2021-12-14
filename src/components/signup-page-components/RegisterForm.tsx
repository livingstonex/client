import React, {useState, } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "../../redux/index";
import type { ChangeEvent, MouseEvent } from "react";
import { callApi } from "../../utils";
import { toast } from 'react-toastify';

const RegisterForm: React.FC = () => {
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<any>('');

    const dispatch = useDispatch();
    const { login, storeUser, storeToken } = bindActionCreators(actionCreators, dispatch);

    const onChangeFirstname = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value);
    }

    const onChangeLastname = (e: ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (loading) return;

        if (!firstname || !lastname || !email || !password) {
            return setError('Please fill in all fields!');
        }

        setError('');

        setLoading(true);

        const payload = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        }

        callApi(`/signup`, payload, 'post')
        .then((res: any) => {
          login();
          storeToken(res.token);
          storeUser(res.user.id);
          setLoading(false);
          setRedirect("/events")
          return toast.success("Success");
        })
        .catch(err => {
          setLoading(false);
          return toast.error(err.message);
        });
        
    }


  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <div className="center-content">
        <div className="register-form">
            <div className="reset-container">
              <h3 className="mb-0 logo-text">Sign Up</h3>
              <div className="text-muted mt-3">Get your new account</div>
              <br />
              <label className="lmb-5">First Name</label>
              <input
                placeholder={'Firstname'}
                name={'firstname'}
                type={'firstname...'}
                onChange={(e) => onChangeFirstname(e)}
                value={firstname}
                disabled={loading}
                className="event-input"
                required
              />
              <br />
              <label className="lmb-5">Last Name</label>
              <input
                placeholder={'lastname...'}
                name={'lastname'}
                type={'text'}
                onChange={(e) => onChangeLastname(e)}
                value={lastname}
                disabled={loading}
                className="event-input"
                required
              />
              <br />
              <label className="lmb-5">Email</label>
              <input
                placeholder={'email...'}
                name={'email'}
                type={'email'}
                onChange={(e) => onChangeEmail(e)}
                value={email}
                disabled={loading}
                className="event-input"
                required
              />
              <br />
              <label className="lmb-5">Password</label>
             <input
                placeholder={'password...'}
                name={'password'}
                type={'password'}
                onChange={(e) => onChangePassword(e)}
                value={password}
                disabled={loading}
                className="event-input"
                required
              />
              {error ? (
                      <span className="error-msg">{error}</span>
                    ) : '' } 
              <button disabled={false} className="search-btn pass mt-5" onClick={(e) => onSubmit(e) }>
                Register 
                {
                  loading ? <i className='fas fa-spinner fa-spin ml-5'></i> : ''
                }
              </button>
            </div>
            <div className="text-muted mt-5">© Eventings Inc | All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
