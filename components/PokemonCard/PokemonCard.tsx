import Image from "next/image";

type Props = {
  pokemonId: number;
  url: string;
  types: string[];
  name: string;
};

const PokemonCard: React.FC<Props> = ({ pokemonId, url, types, name }) => {
  return (
    <div className="flex flex-col text-center w-full p-2 m-2 bg-[var(--foreground)] text-[var(--background)]">
      <h2>
        {pokemonId}. {name}
      </h2>
      <Image src={url} alt={""} width={50} height={50} />

      <div className="flex flex-row">
        {types?.map((type) => (
          <div className="p-2" key={type}>
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
