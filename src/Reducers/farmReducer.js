import { ADD_ANIMAL, CHANGE_FARM, DELETE_ANIMAL, EDIT_ANIMAL, GET_ALL_FROM_LS } from "../Constants/types";
import getId from '../Shared/id';

function farmReducer(state, action) {
    let animalsCopy;
    switch (action.type) {
        case GET_ALL_FROM_LS:
            const allAnimals = JSON.parse(localStorage.getItem('allAnimals'));
            if (null === allAnimals) {
                return state;
            }
            return allAnimals;
        case ADD_ANIMAL:
            const animal = {
                id: getId(),
                color: action.payload.animalInput,
                animal: action.payload.animal,
                farm1: true
            };
            animalsCopy = state.slice();
            animalsCopy.push(animal);
            localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
            return animalsCopy;
        case DELETE_ANIMAL:
            animalsCopy = state.slice();
            for (let i = 0; i < animalsCopy.length; i++) {
                if (animalsCopy[i].id === action.payload) {
                    animalsCopy.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
            return animalsCopy;
        case EDIT_ANIMAL:
            animalsCopy = state.slice();
            for (let i = 0; i < animalsCopy.length; i++) {
                if (animalsCopy[i].id === action.payload.id) {
                    animalsCopy[i].color = action.payload.color;
                    break;
                }
            }
            localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
            return animalsCopy;
        case CHANGE_FARM:
            animalsCopy = state.slice();
            for (let i = 0; i < animalsCopy.length; i++) {
                if (animalsCopy[i].id === action.payload) {
                    animalsCopy[i].farm1 = !animalsCopy[i].farm1;
                    break;
                }
            }
            localStorage.setItem('allAnimals', JSON.stringify(animalsCopy));
            return animalsCopy;
        default:
            return state;
    }
}

export default farmReducer;