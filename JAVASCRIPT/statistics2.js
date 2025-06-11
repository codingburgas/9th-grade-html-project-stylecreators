const Chart_Sofia = {
    labels: ["Жилищни", "Автомобилни", "Индустриални", "Горски/периферни"],
    data: [45, 28, 17, 10],
};
new Chart(document.getElementById("sofiaChart"), {
    type: "doughnut",
    data: {
        labels: Chart_Sofia.labels,
        datasets: [{
            label: "Пожари в София",
            data: Chart_Sofia.data,
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