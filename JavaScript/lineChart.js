const lineChart = document.getElementById("lineChart");

new Chart(lineChart, {
  type: "line",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        label: "Earnings in £",
        data: [
          2000, 1500, 3333, 2345, 4000, 4500, 1000, 2888, 3453, 4444, 3124,
          8000,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0.08)"],
        borderColor: "rgb(57, 161, 236)",

        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
