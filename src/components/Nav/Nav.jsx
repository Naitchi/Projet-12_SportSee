// Css
import './nav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <div>
          <a href="">
            <img src="./img/sportsee.svg" alt="SportSee" />
          </a>
          <a href="">Acceuil</a>
          <a href="">Profil</a>
          <a href="">Réglage</a>
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
