import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { useSelector } from 'react-redux';
import { convertRegularTime } from '../utils/hours';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = ({ filteredRide }) => {
  const { currentRide } = useSelector((store) => store.waitTimes);
  const labels = filteredRide.map((data) => {
    return convertRegularTime(data.time);
  });
  const waitData = filteredRide.map((data) => {
    return data.waitTime;
  });
  const max = Math.max(...waitData) + 10;
  const roundedMax = Math.ceil(max / 10) * 10;

  const options = {
    resonsiveness: true,
    scales: {
      y: {
        beginAtZero: true,
        max: roundedMax,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Wait time for ${currentRide}`,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: waitData,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
