import React, { Component } from 'react';
import './App.css';
import CalResult from "./components/CalResult";
import CalKeypad from "./components/CalKeypad";
class App extends Component {
  constructor(){
    super();

    this.state = {
        result: ""
    }
  }
  
  onClick = button => {
    // eslint-disable-next-line
    // console.log(eval(this.state.result) || "" )
  
    if(button === "="){
        console.log('calculate...')
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }
    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
  try {
    this.setState({
      // eslint-disable-next-line
      result: (eval(this.state.result) || "" ) + ""
    })
  } catch (e) {
    this.setState({
      result: "error"
    })
    
  }
};

reset = () => {
  this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0 , -1)
    })
};

render() {
    return (
        <div className="container">
            <div className="cal">
              <div className="result">
                <CalResult result={this.state.result}/>
              </div>
                <div className="btnGroup">
                  <CalKeypad onClick={this.onClick}/>
                </div>
            </div>
        </div>
    );
}

}

export default App;
