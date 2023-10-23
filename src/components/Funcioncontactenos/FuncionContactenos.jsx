import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const FuncionContactenos = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contactenos");
  };

  return (
    <button>
      CONTACTENOS <FaWhatsapp />
    </button>
  );
};

export default FuncionContactenos;
