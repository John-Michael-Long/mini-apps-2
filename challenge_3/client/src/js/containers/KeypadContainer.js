import { connect } from 'react-redux';
import Keypad from '../components/Keypad.jsx';
import {changeScore} from '../actions/actions.js';

const mapStateToProps = (state) => {
  return {
    score: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleKeypadEntryClick: usersScore => {
      dispatch(changeScore(usersScore))
    }
  }
}

var KeypadContainer = connect(null, mapDispatchToProps)(Keypad)


export default KeypadContainer;
