export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  maintainAspectRatio: false,
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const salesLabels = labels.slice(0, 7);
const orderLabels = labels.slice(0, 4);

const data1 = Math.floor(Math.random() * (20000 + 1));
const data2 = Math.floor(Math.random() * (20000 + 1));
const data3 = Math.floor(Math.random() * (4000 + 1));
const data4 = Math.floor(Math.random() * (4000 + 1));

export const barData = {
  // labels,
  labels: salesLabels,
  datasets: [
    {
      label: "Purchase",
      data: salesLabels.map(() => data1),
      borderColor: "#51CC5D",
      borderWidth: 2,
      backgroundColor: "#51CC5D7F",
    },
    {
      label: "Sales",
      data: salesLabels.map(() => data2),
      borderColor: "#74B0FA",
      borderWidth: 2,
      backgroundColor: "#74B0FA7F",
    },
  ],
};

export const waveData = {
  labels: orderLabels,
  datasets: [
    {
      fill: true,
      label: "Ordered",
      data: orderLabels.map(() => data3),
      borderColor: "#FDC17B",
      backgroundColor: "#FDC17B7F",
    },
    {
      fill: true,
      label: "Delivered",
      data: orderLabels.map(() => data4),
      borderColor: "#589EFF",
      backgroundColor: "#589EFF7F",
    },
  ],
};
