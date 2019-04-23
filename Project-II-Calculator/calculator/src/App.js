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
      display: 0,
      total: 0,
      runningNum:0,
      lastNum:0,
      lastClick:"",
      action:"",
    }
  }

handleClick(i) {


   let newRunningNum = !isNaN(this.state.lastClick) ? this.state.runningNum * 10 + i : i;
   this.setState({
     runningNum : newRunningNum,
     display : newRunningNum,
     lastClick: i,
   })
   
  
  
   let total = this.state.action !== "" ? this.calculate(i, this.state.lastNum, this.state.action) : 0;
    //this.setState({
     /// total: total,
      //action:"",
    //})  
 }

 renderButton(i) {
   
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
    display: 0,
    total: 0,
    runningNum:0,
    lastNum:0,
    lastClick:"",
    action:"",
   })
 }

 renderDisplayButton() {
   return (
     <Display
     value = {this.state.display}
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

 renderActionButton(action) {
  
  return (
    {action}  !== "=" ? <ActionButton 
    value = {action}  
    onClick = {() => {
      let newLastNum = this.state.runningNum;
      this.setState({
      action: action,
      lastClick: action,
      lastNum : newLastNum,
      display: newLastNum,
      runningNum : 0,
      })
    }
      }
    />  : <ActionButton 
    value = {action}  
    onClick = {() => {
      let newTotal = this.calculate(this.state.runningNum, this.state.lastNum, this.state.action);
      this.setState({
        lastClick: "",
      /*  total : newTotal,
        display: newTotal,*/
     
      })
    }}
    /> 
  )
 }
 
 calculate(curr, lastNum, action) {
  let result ;
    switch (action) {
      case "÷" :
        result = lastNum / curr;
        break;
      case "×" :
        result = lastNum * curr;
        break;  
      case "−" :
        result = lastNum - curr;
        break;
      case "+" :
        result = lastNum + curr;
        break;
    
      default: 
        result = curr;
    }
    this.setState({
      total: result,
      runningNum: 0,
      lastNum: 0,
      lastClick: "", 
      display: result,
      action: "",
    });
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
      <div className="grid-1">
        {this.renderActionButton("÷")}
        {this.renderActionButton("×")}
        {this.renderActionButton("−")}
        {this.renderActionButton("+")}
        {this.renderActionButton("=")}

      </div>
      
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
