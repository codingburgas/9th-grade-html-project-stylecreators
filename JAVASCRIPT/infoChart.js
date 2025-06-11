const ctx = document.getElementById('firesChart').getContext('2d');
const firesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
        datasets: [{
            label: 'Брой пожари',
            data: [10, 12, 18, 26, 39, 54, 68, 81, 54, 31, 22, 19],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});