const getAvailableTimes = async (date, model) => {
  const results = await model.find({ date });
  return [...new Set(results.map((ride) => ride.time))];
};

export const getAllRides = async (time, date, sort, model) => {
  const rides = await model.find({ time, date }).sort(`${sort}`);
  const times = await getAvailableTimes(date, model);
  return { rides, times };
};

export const getRideInfo = async (rideName, date, sort, model) => {
  return await model.find({ name: rideName, date: date }).sort(`${sort}`);
};
