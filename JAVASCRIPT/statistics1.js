const Chart_Burgas = {
  labels: ["Индустриални", "Жилищни", "Горски", "Трева/села"],
  data: [34, 22, 28, 16],
};

const ctx = document.querySelector(".fire-chart");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: Chart_Burgas.labels,
    datasets: [{
      label: "Видове пожари",
      data: Chart_Burgas.data,
    }],
  },
  options: {
    responsive: false,
    borderWidth: 5,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: { display: false }
    }
  }
});