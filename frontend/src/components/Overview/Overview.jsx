import PropTypes from "prop-types";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import classes from "./Overview.module.css";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowUpRight,
  IconArrowDownRight,
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
  const { name, data, graphType } = props;
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          {graphType !== undefined ? (
            graphType === "bar" ? (
              <div>
                {/* <BarGraph data={[stat]} /> */}
                <p>bar</p>
              </div>
            ) : (
              <div>
                {/* <WaveGraph data={[stat]} /> */}
                <p>wave</p>
              </div>
            )
          ) : null}
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text size="md" c="dimmed" className={classes.value}>
            {stat.value}
          </Text>
          {stat.diff !== undefined ? (
            <Text
              c={stat.diff > 0 ? "teal" : "red"}
              fz="sm"
              fw={500}
              className={classes.diff}
            >
              <span>{stat.diff}%</span>
              <DiffIcon size="1rem" stroke={1.5} />
            </Text>
          ) : null}
        </Group>
      </Paper>
    );
  });

  const col = data.length;

  return (
    <div className={classes.root}>
      <Text size="md" c="dimmed" className={classes.title}>
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
  graphType: PropTypes.oneOf(["bar", "wave"]).isRequired,
};

export default Overview;
