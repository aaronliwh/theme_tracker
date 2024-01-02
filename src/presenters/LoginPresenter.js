import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function LoginPresenter() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/home");
      }

    return <div>
            <p>Test</p>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
  }

  
  export default LoginPresenter;