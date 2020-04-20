import React from 'react';
import '../css/Counter.css';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.state={count:0}
    }

    
    increment(){
        this.setState({
            count:this.state.count+1
        });
    }

    decrement(){
        this.setState({
            count:this.state.count-1
        });
    }

    render(){
        return(
            <div>
            <h1>Counter</h1>
            <button id= 'decrement' onClick={this.decrement}>-</button>&nbsp;
            <u>{this.state.count}</u>&nbsp;
            <button id='increment' onClick={this.increment}>+</button>
            </div>
        );
    }
}
export default Counter; 