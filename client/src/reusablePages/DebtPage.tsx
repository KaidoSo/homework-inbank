import React from "react";
import GoBackComponent from "../components/GoBackComponent";

const DebtPage = () => {
  return (
    <div className="flex flex-col items-center justify-center align-center ">
      <div className="w-100 h-20">
        <p className="text-red-700 text-3xl">
          Sorry, you have debt, can't offer loan to you at the moment.
        </p>
      </div>
      <div className="rid h-screen place-items-center">
        <GoBackComponent />
      </div>
    </div>
  );
};

export default DebtPage;
