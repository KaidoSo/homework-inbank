import { selectedUserData } from "../types/tsTypes";
import EmptyPage from "../reusablePages/EmptyPage";
import LoanCalculatePage from "./LoanCalculatePage";

interface LoanPageProps {
  selectedUserData: selectedUserData;
}
const LoanPage = ({ selectedUserData }: LoanPageProps) => {
  const isValidUser = selectedUserData.selectedPerson._id !== 0;
  return (
    <>
      {!isValidUser && <EmptyPage />}
      <LoanCalculatePage selectedUserData={selectedUserData} />
    </>
  );
};

export default LoanPage;
