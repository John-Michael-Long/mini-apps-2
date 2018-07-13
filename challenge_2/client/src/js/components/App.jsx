import React from 'react';
//import style from './css/main.css';
import axios from 'axios';
import {Line} from 'react-chartjs-2'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: ''
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    axios.get('/bitcoinData')
    .then( data => {
      data = data.data;
      console.log('data:', data)
      let dates = Object.keys(data.bpi).sort();
      let closingValues = [];

      for(let i = 0; i < dates.length; i++) {
        let date = dates[i]
        closingValues.push( data.bpi[date] )
      }

      let chartData = {
        labels: dates,
        datasets: [{
          label: "something",
          data: closingValues
        }]
      }

      this.setState({
        chartData: chartData
      })
    })
    .catch( err => {
      console.log('error:', err)
    })
  }

  render() {
    return (
      <div>
        <Line
            data={this.state.chartData}
          />
      </div>
    );
  }
}

export default App;


