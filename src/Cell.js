import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    render(){
        return(
            <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}} >
            </div>
        )
    }

    changeColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }
} 
