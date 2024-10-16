"use client";

import { useState } from "react";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";

function PetsList({ pets }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const petList = pets
    .filter(
      (pet) =>
        pet.name.toLowerCase().includes(query) &&
        (type === pet.type) | (type === "All")
    )
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  const handleQueryOnChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };
  const handlePetSelectorChange = (event) => {
    setType(event.target.value);
    console.log(type);
  };

  return (
    <>
      <div className="mx-auto">
        <SearchBar
          handleQueryOnChange={handleQueryOnChange}
          handlePetSelectorChange={handlePetSelectorChange}
        />
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
