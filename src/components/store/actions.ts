import { ACTION_ADD } from '../shop';
import { ACTION_DEL} from '../shop'

export const add = (cost: number, product: string) :object => {
    return {
        type: ACTION_ADD,
        payload: [cost, product]
    }
}

export const del = (iter: number) :object => {
    return {
        type: ACTION_DEL,
        payload: iter
    }
}
