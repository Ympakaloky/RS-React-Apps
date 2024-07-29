import { useEffect, useState } from 'react';
import { DetailsProps, PokemonProps } from '../../store/interface';
import Loading from '../loading';
import { LINK } from '../../store/enum';
import './Details.css';

function Details({ name, click }: DetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [data, setData] = useState<PokemonProps | undefined>(undefined);

  useEffect(() => {
    async function newName(name: string) {
      const response = async () => {
        setIsLoading(true);
        const response = await fetch(`${LINK.POKEAPI}/${name}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      };
      response().catch(() => setErrorStatus(true));
    }

    newName(name);
  }, [name, click]);

  function handleItemClick() {
    setData(undefined);
  }

  if (errorStatus) {
    throw new Error('Simulated error from App component');
  }

  return (
    data && (
      <div className="part detail">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data.sprites.front_default && <img src={data.sprites.front_default} alt="photo" />}
            <h5>Name: {data.name}</h5>
            <ul>
              Abilities:
              {data.abilities.map((item, index) => (
                <li key={item.ability.name}>
                  {index + 1}: {item.ability.name}
                </li>
              ))}
            </ul>
            <button onClick={() => handleItemClick()}>close</button>
          </>
        )}
      </div>
    )
  );
}

export default Details;
