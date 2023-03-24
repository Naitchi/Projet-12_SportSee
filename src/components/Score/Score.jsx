// Librairies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RadialBar, RadialBarChart } from 'recharts';

// Css
import './score.css';

//Services
import { getScoreById } from '../../services/user.service.js';

function Score() {
  const [score, setScore] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchScore = async (id) => {
      const score = await getScoreById(id);
      setScore(score);
    };
    fetchScore(id).catch(console.error);
  }, [id]);

  const data = [
    {
      name: 'score',
      value: score,
      fill: '#FF0000',
    },
  ];

  return (
    <div className="Score">
      <h3 className="title">Score</h3>
      <RadialBarChart
        width={200}
        height={200}
        cx={100}
        cy={100}
        innerRadius={87}
        outerRadius={140}
        barSize={10}
        data={data}
        startAngle={215}
        clockWise={true}
        endAngle={215 + -((score * 360) / 100)}
      >
        <RadialBar dataKey="value" cornerRadius={5} label={false} style={{ fill: 'red' }} />{' '}
        <circle cx={100} cy={100} r={82} fill="white" />
        <text x={100} y={100} textAnchor="middle">
          <tspan fontWeight={'bold'} fontSize={26} fill={'#282D30'}>
            {score ? `${score}%` : 'Chargement...'}
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={'#74798C'}>
            de votre
          </tspan>
          <tspan fontSize={18} x={100} dy={26} fill={'#74798C'}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </div>
  );
}

export default Score;
