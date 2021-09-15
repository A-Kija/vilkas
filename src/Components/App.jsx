import React from 'react';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: 'palegreen',
            bgIn: '',
            size: 600,
            sizeIn: '',
            shapeSquare: false
            };
    }

    inChangeColor = (e) => {
        this.setState({
            bgIn: e.target.value,
        });
    }
    doColor = () => {
        this.setState(state => ({bg: state.bgIn}));
    }
    inChangeSize = (e) => {
        this.setState({
            sizeIn: e.target.value,
        });
    }
    doSize = () => {
        this.setState(state => ({size: state.sizeIn}));
    }

    inChangeShape = () => {
        //good
        this.setState(state => ({shapeSquare: (!state.shapeSquare)}));

        //wrong
        // this.setState({
        //     shapeSquare: (!this.state.shapeSquare),
        // });
    }


    render() {
        return (
            <div className="circle" style={{
                backgroundColor: this.state.bg,
                width: this.state.size+'px',
                height: this.state.size+'px',
                borderRadius: this.state.shapeSquare ? '0' : '50%'
                }}>
                <div>
                    <input type="text" value={this.state.bgIn} onChange={this.inChangeColor}/>
                    <button className="input-button" onClick={this.doColor}>Change Color</button>
                </div>
                <div>
                    <input type="text" value={this.state.sizeIn} onChange={this.inChangeSize}/>
                    <button className="input-button" onClick={this.doSize}>Change Size</button>
                </div>
                <div>
                    <input type="checkbox" onChange={this.inChangeShape} checked={this.state.shapeSquare}/>
                    <label>Change Shape</label>
                </div>
            </div>
        );
    }
}
    
export default App;