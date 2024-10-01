import PetItem from "./PetItem";

function PetsList({ pets }) {
  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xxl-5 col-xl-6 col-lg-7">
          <div className="section-title text-center mb-30">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <br />
            Type:
            <select className="form-select" defaultValue={""}>
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">{petList}</div>
    </div>
  );
}

export default PetsList;
