import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signInUsingGoogle } = useAuth(); 
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri); 
        })
}

  return (
    <div>
      <div className="container py-5 border-top border-1">
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex flex-column justify-content-center">
            <div className="">
              <h1 className="brand-color fw-bold text-center mb-4">Login Here</h1>
              <p className="mt-4 text-center">New to Classic Tourism Park then please <Link to="/register">Create an account</Link></p>
            </div>
              <hr />
            <div onClick={handleGoogleLogin} style={{cursor:"pointer",display:"inline-block"}} className="text-center">
              <span>
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/google.png" alt="Google Logo" width="60px" />
              </span>
              <p className="text-primary fw-bold">Google Sign In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;