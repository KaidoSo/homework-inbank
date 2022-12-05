import numberFormatter from "./NumberFormatter";

const LoanCalculator = (
  creditScore: number,
  loanAmount: number,
  loanDuration: number
) => {
  if (creditScore < 0) {
    return (
      <h1 className="text-red-700 text-3xl">
        We're sorry, we can't offer you loan at this time.
      </h1>
    );
  }

  if (creditScore > 0 && creditScore < 1) {
    return (
      <>
        <h1 className="text-lime-700 text-3xl">
          The amount you requested can not be loaned.
        </h1>
        <h1 className="text-lime-700 text-3xl">
          The maximum amount for the period of time you have chosen is
        </h1>
        <p className="text-lg text-center h-20 text-4xl">
          {numberFormatter(creditScore * loanAmount, 2)} $
        </p>
        <h1 className="text-green-700 text-3xl">
          Monthly installments of
        </h1>
        <p className="text-lg text-center h-20 text-4xl text-green-900">
          {numberFormatter(creditScore * loanAmount / loanDuration, 2)}$
        </p>
      </>
    );
  }
  if (creditScore >= 1) {
    return (
      <>
        <h1 className="text-green-700 text-3xl">
          We're happy to offer you requested amount of loan.
        </h1>
        <h1 className="text-green-700 text-3xl">
          The maximum amount for the period of time you have chosen is
        </h1>
        <p className="text-lg text-center h-20 text-4xl">
          {numberFormatter(creditScore * loanAmount, 2)}$
        </p>
        <h1 className="text-green-700 text-3xl">
          Monthly installments of
        </h1>
        <p className="text-lg text-center h-20 text-4xl text-green-900">
          {numberFormatter(creditScore * loanAmount / loanDuration, 2)}$
        </p>
      </>
    );
  }
};

export default LoanCalculator;
