const doughnutChart = document.getElementById("doughnutChart");

new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: ["Supplements", "Clothes", "Accessories", "Shoes"],
    datasets: [
      {
        label: "Products",
        data: [300, 50, 100, 444],
        backgroundColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(54, 162,235, 1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],

        borderColor: [
          "rgba(41, 155, 99, 1)",
          "rgba(54, 162,235, 1)",
          "rgba(255,206,86,1)",
          "rgba(120,46,139,1)",
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
