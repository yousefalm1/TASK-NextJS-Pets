import Image from "next/image";

function PetItem({ pet }) {
  return (
    <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
      <div className="h-72 border-b-2 border-palette-lighter relative">
        <Image
          alt={pet.name}
          src={pet.image}
          className="transform duration-500 ease-in-out hover:scale-110"
          fill
          sizes="100vw" />
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
          {pet.name}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {pet.description}
        </div>
        <div className="grid grid-cols-2 gap-2">

          <button type="button" className="text-palette-dark font-primary font-medium text-base m-4 p-8 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm">
            Pet
          </button>
          <button type="button" className="text-palette-dark font-primary font-medium text-base m-4 p-8 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
