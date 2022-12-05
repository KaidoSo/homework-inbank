import ButtonComponent from "../components/ButtonComponent";
import ComboboxComponent from "../components/ComboboxComponent";
import ListboxComponent from "../components/ListboxComponent";
import SelectboxComponent from "../components/SelectboxComponent";
import { PersonType } from "../types/tsTypes";
interface mainPageProps {
  data: any;
  loanAmount: number;
  setLoanAmount: React.Dispatch<React.SetStateAction<number>>;
  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  selectedPerson: PersonType;
  setSelectedPerson: React.Dispatch<React.SetStateAction<PersonType>>;
}

const MainPage = ({
  data,
  loanAmount,
  setLoanAmount,
  selectedMonth,
  setSelectedMonth,
  selectedPerson,
  setSelectedPerson,
}: mainPageProps) => {
  return (
    <main className={"max-w-md mx-auto"}>
      <h1 className={"mt-5 text-3xl font-bold text-center"}>
        Credit Modifier Page
      </h1>

      <p className={"mt-10 text-2xl font-bold text-center text-gray-700"}>
        Select User
      </p>
      <div
        className={
          "mt-5 focus-within:ring-2 focus-within:ring-blue-500 shadow-xl"
        }
      >
        <ComboboxComponent
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
          person={data}
        />
      </div>
      <p className={"mt-10 text-2xl font-bold text-center text-gray-700"}>
        Loan Period (in months)
      </p>
      <div
        className={
          "mt-5 focus-within:ring-2 focus-within:ring-blue-500 shadow-xl"
        }
      >
        <ListboxComponent
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      <div className="mt-5 text-3xl font-bold text-center">
        <SelectboxComponent
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
        />
      </div>
      <div className="mt-5 text-3xl font-bold text-center">
        <ButtonComponent />
      </div>
    </main>
  );
};

export default MainPage;
