import React, {useState, useEffect, useReducer} from 'react';
import SmallAnimal from './SmallAnimalF';
import Modal from './Modal';
import farmReducer from '../Reducers/farmReducer';
import { changeAnimal, createAnimal, getAllAnimals, moveAnimal, removeAnimal } from '../Actions'; 
function App() {

    const [animals, animalDispacher] = useReducer(farmReducer, []);
    const [animalInput, setAnimalInput] = useState('');

    const [open, setOpen] = useState(0);

    useEffect(() => {
        animalDispacher(getAllAnimals());
    }, []);

    const deleteAnimal = (id) => {
        closeModal();
        animalDispacher(removeAnimal(id));
    }

    const editAnimal = (id, color) => {
        closeModal();
        animalDispacher(changeAnimal({id: id, color: color}));
    }

    const changeFarm = (id) => {
        closeModal();
       animalDispacher(moveAnimal(id));
    }

    const animalInputHandler = (e) => {
        setAnimalInput(e.target.value);
    }

    const openModal = (id) => {
        setOpen(id);
    }

    const closeModal = () => {
        setOpen(0);
    }

    return (
        <>
            <div className="field">
                <div className="farm">
                    <h1>Farm No. 1</h1>
                    {animals.map(b => <SmallAnimal open={openModal} farm1={b.farm1} farmNamber={1} key={b.id} id={b.id} color={b.color} animal={b.animal} />)}
                </div>
                <div className="farm">
                    <h1>Farm No. 2</h1>
                    {animals.map(b => <SmallAnimal open={openModal} farm1={b.farm1} farmNamber={2} key={b.id} id={b.id} color={b.color} animal={b.animal} />)}
                </div>
            </div>
            <div>
                <input type="text" value={animalInput} onChange={animalInputHandler}/>
                <button className="input-button" onClick={()=>animalDispacher(createAnimal({animal: 'cow', animalInput: animalInput}))}>Add Cow</button>
                <button className="input-button" onClick={()=>animalDispacher(createAnimal({animal: 'sheep', animalInput: animalInput}))}>Add Sheep</button>
            </div>
            <Modal id={open} edit={editAnimal} change={changeFarm} close={closeModal} destroy={deleteAnimal}></Modal>
        </>
    );
}
export default App;