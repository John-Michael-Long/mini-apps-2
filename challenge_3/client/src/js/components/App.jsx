import React from 'react';
import KeypadContainer from '../containers/KeypadContainer'


class App extends React.Component {
  render() {
    return (
      <div>
        SCORE: {this.props.score}
        <KeypadContainer />
      </div>
    )
  }
}


// const App = ({score}) => (
//   <div>
//     SCORE: {score}
//     <KeypadContainer />
//   </div>
// )

export default App;