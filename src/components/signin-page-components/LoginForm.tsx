import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>('');
    const [redirect, setRedirect] = useState<any>('');

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <div className="center-content">
        <div className="login-form">
            {/* <div className="logo-div">
              <a href="/"><h3 className="logo-text">Eventings</h3></a>
            </div> */}
            
            <div className="reset-container">
              <h3 className="mb-0 logo-text">Login</h3>
              <div className="text-muted mt-3">Login to your account</div>
              <br />
              <label className="lmb-5">Email</label>
              {/* <NewPasswordInput onChange={this.setInput} value={newPassword} name='newPassword'/> */}
              <br />
              <label className="lmb-5">Password</label>
              {/* <NewPasswordInput onChange={this.setInput} value={confirmNewPassword} name='confirmNewPassword' /> */}
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
