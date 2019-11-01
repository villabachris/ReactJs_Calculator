import React, {Component} from 'react';

class CalResult extends Component {

    render() {
        let {result} = this.props;

        return (
        <div className="result">
            <input type="textarea" disabled value={result}/>
        </div>
        );  
    }
} 

export default CalResult;