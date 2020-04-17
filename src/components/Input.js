import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} className={this.props.className}/>
            </div>
        );
    }
}

export default Input;