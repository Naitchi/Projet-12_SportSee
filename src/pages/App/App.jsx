// Librairies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Nav from '../../components/Nav/Nav.jsx';
import Counts from '../../components/Counts/Counts.jsx';
import Activity from '../../components/Activity/Activity.jsx';
import Sessions from '../../components/Sessions/Sessions.jsx';
import Score from '../../components/Score/Score.jsx';
import Performance from '../../components/Performance/Performance.jsx';

// Css
import './App.css';

// Services
import { getUserById } from '../../services/user.service.js';

function App() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async (id) => {
      const user = await getUserById(id);
      setUser(user);
    };
    fetchUser(id).catch(console.error);
  }, [id]);

  return (
    <div className="App">
      <Nav />
      <div className="top">
        <h1>Bonjour {user && <span className="highlight">{user.firstName}</span>}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="body">
        <div className="left">
          <Activity />
          <div className="bottom">
            <Sessions />
            <Performance />
            <Score />
          </div>
        </div>
        <Counts />
      </div>
    </div>
  );
}

export default App;
