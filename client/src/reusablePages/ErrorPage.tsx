import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center align-center ">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mb-8 text-6xl font-bold">Page Not Found</h2>
      <p className="mb-8 text-3xl text-red-700">
        Sorry, something went wrong, please try again.
      </p>

      <div className="grid h-screen place-items-center">
        <a
          className="px-6 py-3 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-600"
          href="/"
        >
          GO BACK
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
