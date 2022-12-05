import MainPage from "./pages/MainPage";
import LoadingSpinner from "./reusablePages/LoadingSpinner";
import useCustomHook from "./utils/useCustomHook";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoanPage from "./pages/LoanPage";
import { useState } from "react";
import { PersonType, selectedUserData } from "./types/tsTypes";
import NotFoundPage from "./reusablePages/NotFoundPage";
import ErrorPage from "./reusablePages/ErrorPage";

function App() {
  const [loanAmount, setLoanAmount] = useState(2000);
  const [selectedMonth, setSelectedMonth] = useState(12);
  const [selectedPerson, setSelectedPerson] = useState<PersonType>({
    _id: 0,
    userId: "",
    hasDebt: false,
    creditModifier: 0,
  });

  const selectedUserData: selectedUserData = {
    loanAmount: loanAmount,
    selectedMonth: selectedMonth,
    selectedPerson: selectedPerson,
  };

  const { dataState, loading, error } = useCustomHook(
    "http://localhost:3002/api/user/get"
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Router>
      <Routes>
        <Route
            path="/loanpage"
            element={<LoanPage selectedUserData={selectedUserData} />}
          />
        <Route
          path="/"
          element={
            <MainPage
              data={dataState}
              loanAmount={loanAmount}
              selectedMonth={selectedMonth}
              selectedPerson={selectedPerson}
              setLoanAmount={setLoanAmount}
              setSelectedMonth={setSelectedMonth}
              setSelectedPerson={setSelectedPerson}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
