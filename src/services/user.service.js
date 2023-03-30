/**
 * fetch data of the user (name, lastname, etc...)
 * @param {number} id
 * @returns {Object}
 */
export async function getUserById(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.id == id)) {
      return data.find((item) => item.id == id).userInfos;
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const user = await response.json();
      return user.data.userInfos;
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * fetch data for the counts stats
 * @param {number} id
 * @returns {Array}
 */
export async function getKeyDataById(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.id == id)) {
      return data.find((item) => item.id == id).keyData;
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const keyData = await response.json();
      return keyData.data.keyData;
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * fetch data for the score chart
 * @param {number} id
 * @returns {number}
 */
export async function getScoreById(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.id == id)) {
      return data.find((item) => item.id == id).todayScore * 100;
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const score = await response.json();
      return score.data.todayScore * 100;
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * fetch data for the activity chart
 * @param {number} id
 * @returns {Array}
 */
export async function getUserActivityById(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/activity.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.userId == id)) {
      return formatDataActivity(data.find((item) => item.userId == id).sessions);
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id + '/activity', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await response.json();
      return formatDataActivity(result.data.sessions);
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * fetch data for the average sessions chart
 * @param {number} id
 * @returns {Array}
 */
export async function getUserAverageSession(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/average_sessions.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.userId == id)) {
      return formatDataSessions(data.find((item) => item.userId == id).sessions);
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id + '/average-sessions', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await response.json();
      return formatDataSessions(result.data.sessions);
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * fetch data for the performance chart
 * @param {number} id
 * @returns {Array}
 */
export async function getUserPerformance(id) {
  if (import.meta.env.VITE_MOCK === 'true') {
    const response = await fetch('./data/performance.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    if (data.some((item) => item.userId == id)) {
      return formatDataPerformance(data.find((item) => item.userId == id));
    }
  } else {
    try {
      const response = await fetch('http://localhost:3000/user/' + id + '/performance', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await response.json();
      return formatDataPerformance(result.data);
    } catch (e) {
      return console.log(JSON.stringify(e));
    }
  }
}

/**
 * transform data for the performance chart
 * @param {Array} data
 * @returns {Array}
 */
const formatDataPerformance = (data) => {
  const categories = Object.values(data.kind);

  const dataFormated = data.data.map((item) => {
    return {
      category: categories[item.kind - 1],
      value: item.value,
    };
  });
  return dataFormated;
};

/**
 * format data for the average sessions chart
 * @param {Array} data
 * @returns {Array}
 **/
const formatDataSessions = (data) => {
  const dataFormated = data.map((item) => {
    return {
      day: dayConverter(item.day),
      value: item.sessionLength,
    };
  });
  return dataFormated;
};

/**
 * format data for the average sessions chart
 * @param {Array} data
 * @returns {Array}
 **/
const formatDataActivity = (data) => {
  const dataFormated = data.map((item, index) => {
    return {
      day: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    };
  });
  return dataFormated;
};

/**
 * Change number of day to letter
 * @param {number} day
 * @returns {string}
 **/
const dayConverter = (day) => {
  switch (day) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
  }
  return;
};
