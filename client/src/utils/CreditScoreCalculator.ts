import { selectedUserData } from "../types/tsTypes";

const CreditScoreCalculator = (selectedUserData: selectedUserData) => {
  const creditScore =
    (selectedUserData.selectedPerson.creditModifier /
      selectedUserData.loanAmount) *
    selectedUserData.selectedMonth;

  return creditScore;
};

export default CreditScoreCalculator;
