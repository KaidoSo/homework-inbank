import { Link } from "react-router-dom";

const GoBackComponent = () => {
  return (
    <Link
      to="/"
      className="px-6 py-3 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-600"
    >
      Back to Home
    </Link>
  );
};

export default GoBackComponent;
