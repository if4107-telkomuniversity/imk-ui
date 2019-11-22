const renderScore = () => {
	let chart = $('#score');

	let data = [10, 20, 30, 10, 50, 30, 40, 80, 90, 95];
	let label = [
		'Modul 1',
		'Modul 2',
		'Modul 3',
		'Modul 4',
		'Modul 5',
		'Modul 6',
		'Modul 7',
		'Modul 8',
		'Modul 9',
		'Modul 10'
	];

	let score = new Chart(chart, {
		type: 'line',
		data: {
			labels: label,
			datasets: [{
				data: data,
				borderColor: "#184254",
				fill: false,
				label: 'Nilai'
			}]
		},
		options: {
			title: {
				display: false
			},
			tooltips: {
				callbacks: {
					label: tooltipItem => {
						let score = tooltipItem.yLabel;
						let scores = [
							`Nilai: ${score}`,
							`Tugas Pendahuluan: ${0.1 * score}`,
							`Tes Awal: ${0.2 * score}`,
							`Jurnal: ${0.6 * score}`,
							`Tes Akhir: ${0.2 * score}`,
							'Asprak: VAY'
						]
						return scores;
					}
				}
			},
			scales: {
				yAxes: [{
					display: true,
					ticks: {
						beginAtZero: true,
						max: 100
					}
				}]
			}
		}
	});
};