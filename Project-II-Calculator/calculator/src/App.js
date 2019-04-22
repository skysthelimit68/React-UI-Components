import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: Array(10),
      total: 0,
      lastNum:0,
    }
  }
 
 handleClick(i) {
    this.setState({
      total: i,
      lastNum: i,
    })  
    alert(`State is set to be ${this.state.lastNum}`)
 }

 renderButton(i) {
   
  this.state.buttons[i] = i;

    return (
     <NumberButton 
        value = {this.state.buttons[i]}
        onClick = { () => this.handleClick(i) }
        />
   )
 }
 
 
 
  render() {
    return (
      <div className="calcApp">
      <Display />
      
      <div className="grid-3 numberButton">
            <button className="buttons num grid-4 clearButton">clear</button>
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




      </div>
   
      <ActionButton />
      
    </div>
    )
  }
}


/*const App = () => {
  

  
  
  
  return (
    <div className="calcApp">
      <Display />
      <NumberButton />
      <ActionButton />
      
    </div>
  );
};*/

export default App;
