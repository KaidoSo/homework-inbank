import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent: React.FC = () => {
  return (
    <Link to="/loanpage">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center  ">
        Check
      </button>
    </Link>
  );
};

export default ButtonComponent;
