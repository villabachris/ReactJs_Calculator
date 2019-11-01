import React, {Component} from 'react';

class CalResult extends Component {

    render() {
        let {result} = this.props;
        return (
        <div className="result">
            <p>{result}</p>
        </div>
        );  
    }
} 