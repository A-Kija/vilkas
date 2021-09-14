import React from 'react';
import Reg from './Reg';

// this.props.clickToChangeColor(this.props.color)
// () => this.props.clickToChangeColor(this.props.color)

// A(argument)
// B()(argument)

// function A(argument) {}

// function B() {
    // return A
// }


class ChangeColorButton extends React.Component {

    render() {
        return (
            <button className="container" onClick={() => this.props.clickToChangeColor(this.props.color)}>
            {this.props.color}
            <Reg regNumber={this.props.regNumber}></Reg>
            </button>
        );
    }
}

export default ChangeColorButton;