let generatedData

export const getDonutChartData = (themes) => {
  if (generatedData) {
    generatedData.datasets[0].backgroundColor = [themes.danger, themes.info, themes.primary]
  } else {
    generatedData = {
      labels: ['Empregados', 'Estagiários'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: [themes.danger, themes.info, themes.primary],
        data: [9500, 2478],
      }],
    }
  }

  return generatedData
}
