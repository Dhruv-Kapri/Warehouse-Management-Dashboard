import {
  Text,
  Card,
  RingProgress,
  Group,
  useMantineTheme,
} from "@mantine/core";
import classes from "./OverAllInventory.module.css";

const stats2 = [
  { title: "Categories", content: [{ value: 14, label: "Last 7 days" }] },
  {
    title: "Total Products",
    content: [
      { value: 868, label: "Last 7 days" },
      { value: 25000, label: "Revenue" },
    ],
  },
  {
    title: "Top Selling",
    content: [
      { value: 5, label: "Last 7 days" },
      { value: 2500, label: "Cost" },
    ],
  },
  {
    title: "Low Stocks",
    content: [
      { value: 12, label: "Ordered" },
      { value: 2, label: "Not in stock" },
    ],
  },
];

const OverallInventory = () => {
  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;

  const items2 = stats2.map((stat) => (
    <div key={stat.title}>
      <Group>
        <Text className={classes.lead} mt={20}>
          {stat.title}
        </Text>
      </Group>
      <Group className={classes.content}>
        {stat.content.map((entry) => (
          <Group mt="lg" key={entry.label}>
            <Text className={classes.label}>{entry.value}</Text>
            <br />
            <Text size="xs" c="dimmed">
              {entry.label}
            </Text>
          </Group>
        ))}
      </Group>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.tasks}>
          <Text fz="xl" className={classes.label}>
            Project tasks
          </Text>
          <Group mt="lg">{items2}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Stocked
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
};

export default OverallInventory;
