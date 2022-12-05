import loanColorChanger from "../utils/LoanColorChanger";

interface SelectboxComponentProps {
  loanAmount: number;
  setLoanAmount: (loanAmount: number) => void;
}

const SelectboxComponent = ({
  loanAmount,
  setLoanAmount,
}: SelectboxComponentProps) => {
  return (
    <div>
      <div>
        <p className={"mt-10 text-2xl font-bold text-center text-gray-700"}>
          Loan amount
        </p>
        <span className={loanColorChanger(loanAmount)}>{`${loanAmount}$`}</span>
        <input
          type="range"
          className="
      form-range
      appearance-none
      w-full
      h-10
      p-2
      bg-gray-100
      focus:outline-none focus:ring-0 focus:shadow-none
      rounded-full
      mt-5
      cursor-pointer
    "
          min="2000"
          max="10000"
          id="customRange2"
          step={100}
          onChange={(e) => setLoanAmount(parseInt(e.target.value))}
        />
        <ul className="flex justify-between w-full px-[10px]">
          <li className="flex justify-center relative text-sm">
            <span className="absolute">2000</span>
          </li>
          <li className="flex justify-center relative text-sm">
            <span className="absolute">10,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectboxComponent;
