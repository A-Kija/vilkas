import React from 'react';
import SmallAnimal from './SmallAnimal';
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            animals: [],
            cowInput: ''
            };
    }

    addAnimal = (a) => {
        const animal = {color: this.state.cowInput, animal: a};
        const animals = this.state.animals.slice();
        animals.push(animal);
        this.setState({
            animals: animals
        })
        localStorage.setItem('allAnimals', JSON.stringify(animals));
    }

    cowInputHandler = (e) => {
        this.setState({
            cowInput: e.target.value,
        });
    }

    componentDidMount() {
        const animals = JSON.parse(localStorage.getItem('allAnimals'));
        if (null === animals) {
            return;
        }
        this.setState({
            animals: animals
        })
    }


    render() {
        return (
            <>
                {this.state.animals.map((b, i) => <SmallAnimal key={i} color={b.color} animal={b.animal} />)}
                <div>
                    <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler}/>
                    <button className="input-button" onClick={()=>this.addAnimal('cow')}>Add Cow</button>
                    <button className="input-button" onClick={()=>this.addAnimal('sheep')}>Add Sheep</button>
                </div>
            </>
        );
    }
}
    
export default App;