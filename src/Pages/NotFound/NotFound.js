import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="not-found border-top border-2 border-primary">
        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ctp/404.jpg" alt="" width="100%" height="650px" />
        <button className="btn btn-light fw-bold go-to-home-btn btn-lg border border-3 border-primary">
          <Link style={{textDecoration:"none",fontSize:"22px"}} to="/home">Go Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;