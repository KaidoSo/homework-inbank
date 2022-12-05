import GoBackComponent from "../components/GoBackComponent";

const EmptyPage = () => {
  return (
    <div className="grid h-screen place-items-center">
      <span className="text-lg	antialiased font-semibold text-amber-900">
        SORRY, WITH THIS GIVEN INPUT WE CAN'T SHOW YOU YOUR LOAN AMOUNT
      </span>
      <GoBackComponent />
    </div>
  );
};

export default EmptyPage;
