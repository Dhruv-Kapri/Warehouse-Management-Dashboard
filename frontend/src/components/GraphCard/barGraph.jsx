import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  maintainAspectRatio: false
};

const BarGraph = (props) => {
  return <Bar options={options} data={props.data} />;
};

BarGraph.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string), // Define the expected data shape
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        backgroundColor: PropTypes.string,
        // Add more specific validations for each dataset property
      })
    ),
  }).isRequired,
};

export default BarGraph;
