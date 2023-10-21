import PropTypes from "prop-types";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import classes from "./Overview.module.css";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
} from "@tabler/icons-react";
// import BarGraph from "./BarGraph";
// import WaveGraph from "./WaveGraph";

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

const Overview = (props) => {
  const { name, data } = props;
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between" className={classes.center}>
          <Icon className={classes.icon} size="2.2rem" stroke={1.5} />
        </Group>

        <Group align="flex-end">
          <Text size="md" c="dimmed" className={classes.value}>
            {stat.value}
          </Text>
          <Text size="xs" c="dimmed" className={classes.title} align="flex-end">
            {stat.title}
          </Text>
        </Group>
      </Paper>
    );
  });

  const col = data.length;

  return (
    <div className={classes.root}>
      <Text size="md" c="dimmed" className={classes.heading}>
        {name}
      </Text>
      <SimpleGrid cols={col}>{stats}</SimpleGrid>
    </div>
  );
};

Overview.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      diff: PropTypes.number,
    })
  ).isRequired,
};

export default Overview;
