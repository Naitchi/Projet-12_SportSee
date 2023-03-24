// Librairies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

// Css
import './performance.css';

//Services
import { getUserPerformance } from '../../services/user.service.js';

function Performance() {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPerformance = async (id) => {
      const performance = await getUserPerformance(id);
      setState(performance);
    };
    fetchPerformance(id).catch(console.error);
  }, [id]);

  return (
    <div className="Performance">
      <RadarChart cx={129} cy={131.5} outerRadius={75} width={258} height={263} data={state}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="category" tick={{ fill: 'white', fontSize: 12 }} offset={100} />
        <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}

export default Performance;
