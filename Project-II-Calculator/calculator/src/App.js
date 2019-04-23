import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //buttons: Array(10),
      total: 0,
      lastNum:0,
      action:"",
    }
  }
 
 handleClick(i) {
    //let total = calculate(i, this.state.lastNum, action);
    this.setState({
      total: i,
      lastNum: i,
      action:"",
    })  
 }

/*calculate(curr, lastNum, action) {

}*/


 renderButton(i) {
   
  //this.state.buttons[i] = i;
  let styleClass = i !== 0? "buttons num button3" : "buttons num grid-4";
    
  return (
     <NumberButton 
        value = {i}
        buttonStyle = {styleClass}
        onClick = { () => this.handleClick(i) }
        />
   )
 }

 clearCalc() {
   this.setState({
     total : 0,
     lastNum : 0,
     action: "",
   })
 }

 renderDisplayButton() {
   return (
     <Display
     value = {this.state.total}
     />
   )
 }
 
 renderClearButton() {
   return (
     <ClearButton 
      value = "clear"
      buttonStyle = "buttons num grid-4 clearButton"
      onClick = { () => this.clearCalc() }
      />
   )
 }
 
  render() {
    return (
      <div className="calcApp">
      {this.renderDisplayButton()}
      
      <div className="grid-3 numberButton">
            {this.renderClearButton()}
            <div className="buttonRow">
              {this.renderButton(7)}
              {this.renderButton(8)}
              {this.renderButton(9)}
            </div>
            <div className="buttonRow">
              {this.renderButton(4)}
              {this.renderButton(5)}
              {this.renderButton(6)}
            </div>
            <div className="buttonRow">
              {this.renderButton(1)}
              {this.renderButton(2)}
              {this.renderButton(3)}
            </div>
              {this.renderButton(0)}




      </div>
   
      <ActionButton />
      
    </div>
    )
  }
}


/*
const App = () => {
  

  
  
  
  return (
    <div className="calcApp">
      <Display />
      <NumberButton />
      <ActionButton />
      
    </div>
  );
};
*/
export default App;
