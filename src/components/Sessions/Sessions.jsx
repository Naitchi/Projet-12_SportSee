// Librairies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';

// Components
import CustomTooltip from '../CustomToolTipSessions/CustomToolTip';
import CustomActiveDot from '../CustomActiveDot/CustomActiveDot';

// Css
import './sessions.css';

// Services
import { getUserAverageSession } from '../../services/user.service.js';

/**
 * The sessions component
 *
 * The state variable is an array of object with the following structure:
 * [{day: {string}, value: {number}}]
 *
 * this component use the url parameter id {Number} to fetch the user data
 * @returns the sessions component
 */
function Session() {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSession = async (id) => {
      const sessions = await getUserAverageSession(id);
      setState(sessions);
    };
    fetchSession(id).catch(console.error);
  }, [id]);

  return (
    <div className="Session">
      <h3>
        Durée moyenne des <br /> sessions
      </h3>
      <LineChart
        width={250}
        height={175}
        data={state}
        margin={{
          top: 5,
          left: 5,
          bottom: 5,
          right: 5,
        }}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="white" />
        <Tooltip wrapperStyle={{ outline: 'none' }} cursor={false} content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          strokeWidth={2}
          stroke="#FFFFFF"
          dot={false}
          activeDot={<CustomActiveDot />}
        />
      </LineChart>
    </div>
  );
}

export default Session;
