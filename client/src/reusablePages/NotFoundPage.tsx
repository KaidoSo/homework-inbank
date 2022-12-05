import React from "react";
import GoBackComponent from "../components/GoBackComponent";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-8 text-6xl font-bold">Page Not Found</h2>
      <p className="mb-8">
        Sorry, but the page you are looking for does not exist, have been
        removed. name changed or is temporarily unavailable
      </p>
      <GoBackComponent />
    </div>
  );
};

export default NotFoundPage;
