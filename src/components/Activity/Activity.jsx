// Librairies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

// Components
import CustomTooltip from '../CustomToolTip/CustomToolTip';

// Css
import './activity.css';

// Services
import { getUserActivityById } from '../../services/user.service.js';

/**
 * The activity component
 *
 * The activity component is a bar chart that display the user activity
 * this component use the url parameter id {Number} to fetch the user data
 *
 * the activity data is an array of object with the following structure:
 * [{day: {string}, kilogram: {number}, calories: {number}}]
 *
 * @returns the activity component
 */
function Activity() {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchActivity = async (id) => {
      const activity = await getUserActivityById(id);
      setState(activity);
    };
    fetchActivity(id).catch(console.error);
  }, [id]);

  return (
    <div className="activity">
      <div className="header">
        <h3>Activités quotidiennes</h3>
        <div className="legends">
          <div className="legend">
            <div className="dot black"></div>
            <p>Poids (kg)</p>
          </div>
          <div className="legend">
            <div className="dot red"></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart
        width={750}
        height={200}
        data={state}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={7}
        barGap={8}
        barCategoryGap={36}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={{ stroke: 'none' }} stroke="#9B9EAC" />
        <YAxis yAxisId="left" orientation="left" stroke="#9B9EAC" hide />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#9B9EAC"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip wrapperStyle={{ outline: 'none' }} content={<CustomTooltip />} />
        <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} />
        <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} />
      </BarChart>
    </div>
  );
}

export default Activity;
