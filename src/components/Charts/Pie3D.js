import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Pie3D = ({data}) => {
  const chartConfigs = {
    type: 'pie3d',
    width: 400,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Language",
        "theme": "fusion",
        desimals:0,
        pieRadius: "45%"
      },
      data
    },
  };


  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;



