export const httpGetAllHollywoodRides = async (req, res) => {
  return res.status(200).json({ msg: 'all clear' });
};
export const httpGetHollywoodRide = async (req, res) => {
  const { ride } = req.params;
  return res.status(200).json(`Ride info for ${ride}`);
};
