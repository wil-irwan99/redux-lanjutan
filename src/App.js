import './App.css';
import {Component} from 'react';
import ActionType from './redux/reducer/GlobalActionType';
import {connect} from 'react-redux';
import Number from './components/Number';

class App extends Component {
  render(){
      console.log(this.props)
    return (
      <div>
        <h1>{this.props.numb}</h1>
        <button onClick={this.props.handlePlus}>+</button>
        <button onClick={this.props.handleMinus}>-</button>
        <button onClick={this.props.handleMultiple}>*</button>
        <Number/>
      </div>
    );
  }
}

//cara mengirim status menggunakan mapStateToProps
const mapStateToProps = (state) => {
  return {
      numb : state.globalNumber
  }
}

//cara mengirim action menggunakan mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
      handlePlus : () => dispatch({type : ActionType.PLUS}),
      handleMinus : () => dispatch({type : ActionType.MINUS}),
      handleMultiple : () => dispatch({type : ActionType.MULTIPLE})
  }
}

//connect untuk ikat react dan redux
export default connect(mapStateToProps, mapDispatchToProps) (App);
