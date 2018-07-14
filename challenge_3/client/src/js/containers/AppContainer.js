import { connect } from 'react-redux';
import App from '../components/App.jsx';
//import {changeScore} from '../actions/actions.js';

const mapStateToProps = (state) => {
  return {
    score: state
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     handleKeypadEntryClick: usersScore => {
//       dispatch(changeScore(usersScore))
//     }
//   }
// }

var AppContainer = connect(mapStateToProps, null)(App)


export default AppContainer;
