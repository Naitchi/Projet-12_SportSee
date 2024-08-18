// Librairies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Css
import './counts.css';

// Services
import { getKeyDataById } from '../../services/user.service.js';

/**
 * The counts component
 *
 * The keyData variable is an object with the following structure:
 * {calorieCount:{number}, carbohydrateCount:{number}, proteinCount:{number}, lipidCount:{number}}
 *
 * this component use the url parameter id {Number} to fetch the user data
 * @returns 1 component with stats about the user
 */
export default function Counts() {
  const [keyData, setKeyData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      const result = await getKeyDataById(id);
      setKeyData(result);
    };
    fetchData(id).catch(console.error);
  }, [id]);

  return (
    <div className="counts">
      <div className="count">
        <div className="icone calories">
          <img src="./img/fire.svg" alt="fire icone" />
        </div>
        <div className="info">
          {keyData.calorieCount + 'kCal'}
          <p className="unit">Calories</p>
        </div>
      </div>

      <div className="count">
        <div className="icone proteines">
          <img src="./img/chicken.svg" alt="icone de cuisse de poulet" />
        </div>
        <div className="info">
          {keyData.proteinCount + 'g'}
          <p className="unit">Protéines</p>
        </div>
      </div>

      <div className="count">
        <div className="icone glucides">
          <img src="./img/apple.svg" alt="icone de pomme" />
        </div>
        <div className="info">
          {keyData.carbohydrateCount + 'g'}
          <p className="unit">Glucides</p>
        </div>
      </div>

      <div className="count">
        <div className="icone lipides">
          <img src="./img/cheeseburger.svg" alt="icone de cheeseburger" />
        </div>
        <div className="info">
          {keyData.lipidCount + 'g'}
          <p className="unit">Lipides</p>
        </div>
      </div>
    </div>
  );
}
