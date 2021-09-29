import { CHANGE_COLOR, CHANGE_FANCY_COLOR } from '../Constants/types';

export function changeColor() {
    return {
        type: CHANGE_COLOR
    }
}

export function changeFancyColor(fancyColor) {
    return {
        type: CHANGE_FANCY_COLOR,
        payload: fancyColor
    }

}