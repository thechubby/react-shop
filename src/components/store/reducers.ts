import { ACTION_ADD } from '../shop';
import { ACTION_DEL } from '../shop'

interface StateInterface {
    cart: Array<string>,
    summary: number
}

const initialState: StateInterface = {
    cart: [],
    summary: 0
};

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_ADD:
            return {
                ...state,
                cart: state.cart.concat(action.payload[1]),
                summary: state.summary + action.payload[0]
            }
        case ACTION_DEL:
            let copied = [...state.cart];
            copied.splice(action.payload, 1);
            return {
                ...state,
                cart: copied
            }
    }
    return state;
};
