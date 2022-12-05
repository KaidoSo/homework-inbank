import GoBackComponent from "../components/GoBackComponent";
import DebtPage from "../reusablePages/DebtPage";
import { selectedUserData } from "../types/tsTypes";
import CreditScoreCalculator from "../utils/CreditScoreCalculator";
import LoanCalculator from "../utils/LoanCalculate";

interface LoanPageProps {
  selectedUserData: selectedUserData;
}

const LoanCalculatePage = ({ selectedUserData }: LoanPageProps) => {
  const creditScore = CreditScoreCalculator(selectedUserData);

  const userHasDebt = selectedUserData.selectedPerson.hasDebt;

  const loanAmount = selectedUserData.loanAmount;

  const loanDuration = selectedUserData.selectedMonth;

  if (userHasDebt) {
    return <DebtPage />;
  }

  if (loanAmount === 0) {
    return (
      <>
        <div className="mt-5 text-3xl font-bold text-center">
          <p>Sorry, loan amount can't be 0.</p>
        </div>
        <div className="grid h-screen place-items-center ">
          <GoBackComponent />
        </div>
      </>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="m-auto grid place-items-center">
        {LoanCalculator(creditScore, loanAmount, loanDuration)}
        <GoBackComponent />
      </div>
    </div>
  );
};

export default LoanCalculatePage;
