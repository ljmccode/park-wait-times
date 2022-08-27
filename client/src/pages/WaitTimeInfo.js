import React from 'react';
import { useSelector } from 'react-redux';
import WaitByRide from '../components/WaitByRide';
import WaitByTime from '../components/WaitByTime';

const WaitTimeInfo = () => {
  const { view } = useSelector((store) => store.waitTimes);
  return view === 'time view' ? <WaitByTime /> : <WaitByRide />;
};

export default WaitTimeInfo;
