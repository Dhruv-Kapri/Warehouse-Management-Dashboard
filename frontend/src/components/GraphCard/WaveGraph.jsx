import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./DataOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const WaveGraph = (props) => {
  return <Line options={options} data={props.data} />;
};

WaveGraph.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string), // Define the expected data shape
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        fill: PropTypes.bool,
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        borderColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        // Add more specific validations for each dataset property
      })
    ),
  }).isRequired,
};

export default WaveGraph;
