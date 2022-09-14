import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut2d = ({data}) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: "100%",
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Star Per Language",
        "theme": "candy",
        desimals:0,
        showPercentValues : 0,
        doughnutRadius: "45%"
      },
      data
    },
  };


  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;






