import { Paper, Text } from "@mantine/core";
import PropTypes from "prop-types";
import BarGraph from "./barGraph";
import classes from "./GraphCard.module.css";
import WaveGraph from "./WaveGraph";

const GraphCard = (props) => {
  return (
    <div className={classes.root}>
      <Text size="md" c="dimmed" className={classes.heading}>
        {props.name}
      </Text>
      <Paper withBorder p="md" radius="md">
        {props.graphType === "bar" ? (
          <BarGraph data={props.data} />
        ) : (
          <WaveGraph data={props.data} />
        )}
      </Paper>
    </div>
  );
};

GraphCard.propTypes = {
  name: PropTypes.string.isRequired, // Example validation for 'name'
  graphType: PropTypes.string.isRequired, // Example validation for 'graphType'
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
  }).isRequired, // Example validation for 'data'
};

export default GraphCard;
