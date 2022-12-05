import { Combobox } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

interface Person {
  _id: number;
  userId: string;
  hasDebt: boolean;
  creditModifier: number;
}

interface ComboboxComponentProps {
  person: Person[];
  selectedPerson: Person;
  setSelectedPerson: React.Dispatch<React.SetStateAction<Person>>;
}

const ComboboxComponent = ({
  person,
  selectedPerson,
  setSelectedPerson,
}: ComboboxComponentProps) => {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? person
      : person.filter((person) => {
          return person.userId.toLowerCase().includes(query.toLowerCase());
        });

  if (!person) {
    return null;
  }

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <div className={"flex items-center bg-gray-100 px-3"}>
        <MagnifyingGlassIcon className={"h5 w-5 text-gray-500 inline-block"} />
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: Person) => person?.userId}
          className={"bg-gray-100 w-full py-2 px-3 outline-none"}
          placeholder={'Enter user ID'}
        />
      </div>
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option
            key={person?._id}
            value={person}
            className="py-2 px-3 ui-active:bg-blue-500 ui:active:text-white ui-not-active:bg-white ui-not-active:text-gray-800"
          >
            {person?.userId}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default ComboboxComponent;
