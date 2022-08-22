export const filterRides = (rideTimes) => {
  const rides = [];
  rideTimes
    .filter((ride) => ride.meta.type === 'ATTRACTION')
    .forEach((ride) => {
      rides.push([ride.name, ride.waitTime, ride.status]);
    });
  return rides;
};

export const mapRides = (rides) => {
  const rideStatus = rides.map((ride) => {
    return { name: ride[0], waitTime: ride[1], status: ride[2] };
  });
  return rideStatus;
};
