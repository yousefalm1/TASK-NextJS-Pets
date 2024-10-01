import PetsList from "./components/PetsList";
import pets from "./data/pets";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <PetsList pets={pets} />
    </div>
  );
}
