import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class ExampleChart extends Component {

  render () {


    const chartConfigs = {
      type: 'column2d',
      width: 400,
      height: 400,
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion"
        },
        data: this.props.data
      },
    };


    return <ReactFC {...chartConfigs} />;
  }
}
export default ExampleChart;
