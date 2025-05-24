const ctx = document.getElementById('incidentChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Malware',
                    data: [50, 70, 60, 80],
                    backgroundColor: '#4299E1'
                }, {
                    label: 'Unauthorized Access',
                    data: [30, 40, 50, 40],
                    backgroundColor: '#48BB78'
                }, {
                    label: 'Data Breach',
                    data: [20, 15, 25, 30],
                    backgroundColor: '#F56565'
                }, {
                    label: 'Policy Violation',
                    data: [10, 20, 15, 10],
                    backgroundColor: '#ED8936'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        stacked: true,
                        grid: {
                            color: '#2D3748'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });