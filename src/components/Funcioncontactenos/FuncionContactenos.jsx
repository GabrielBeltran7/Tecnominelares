
import React from 'react';
import {  useNavigate } from "react-router-dom";

const FuncionContactenos = () => {

  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contactenos");
  };

  return (
    <div>
    <button onClick={handleNavigate}>Contactenos</button>
    </div>
  );
}

export default FuncionContactenos;
