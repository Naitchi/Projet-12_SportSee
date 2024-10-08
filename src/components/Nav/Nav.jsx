// Css
import './nav.css';

/**
 * The nav component display nav and header
 *
 * @returns the nav component
 */
export default function Nav() {
  return (
    <header>
      <nav>
        <div>
          <a href="">
            <img src="./img/sportsee.svg" alt="SportSee" />
          </a>
          <a href="">Accueil</a>
          <a href="">Profil</a>
          <a href="">Réglages</a>
          <a href="">Communauté</a>
        </div>
      </nav>
      <div className="sports">
        <div>
          <div className="list">
            <button className="sport">
              <img src="./img/zen.svg" alt="Méditation" />
            </button>
            <button className="sport">
              <img src="./img/swim.svg" alt="Natation" />
            </button>
            <button className="sport">
              <img src="./img/ride.svg" alt="Vélo" />
            </button>
            <button className="sport">
              <img src="./img/bodybuilding.svg" alt="Musculation" />
            </button>
          </div>
          <p>Copiryght, SportSee 2020</p>
        </div>
      </div>
    </header>
  );
}
