import React from 'react';

class Mygtukas2 extends React.Component {

    render() {
        return (
            <a href="" className="container" onClick={e => this.props.virve(e)}>
                <div className="submit-feedback">Pagalbinis</div>
            </a>
        );
    }
}

export default Mygtukas2;