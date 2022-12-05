import React from "react";
import { Listbox } from "@headlessui/react";
import MonthNumber from "../utils/MonthNumber";

interface ListboxComponentProps {
  selectedMonth: any;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
}

const ListboxComponent = ({
  selectedMonth,
  setSelectedMonth,
}: ListboxComponentProps) => {
  const sixYearsInMonths = MonthNumber(60);

  return (
    <div>
      <Listbox value={selectedMonth} onChange={setSelectedMonth}>
        <Listbox.Button className={"bg-gray-100 w-full py-2 px-3 outline-none"}>
          {selectedMonth ? selectedMonth : "Select Month"}
        </Listbox.Button>
        <Listbox.Options>
          {sixYearsInMonths.map((month) => (
            <Listbox.Option
              key={month}
              value={month}
              className="py-2 px-3 ui-active:bg-blue-500 ui:active:text-white ui-not-active:bg-white ui-not-active:text-gray-800"
            >
              {month}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ListboxComponent;
