import { ACTION_ADD_BREAD } from '../shop';
import { ACTION_ADD_EGGS } from '../shop';
import { ACTION_ADD_BUCKWHEAT } from '../shop';
import { ACTION_DEL} from '../shop'

export const addBread = (cost: number, product: string) :object => {
    return {
        type: ACTION_ADD_BREAD,
        payload: [cost, product]
    }
}

export const addEggs = (cost: number, product: string) :object => {
    return {
        type: ACTION_ADD_EGGS,
        payload: [cost, product]
    }
}

export const addBuckWheat = (cost: number, product: string) :object => {
    return {
        type: ACTION_ADD_BUCKWHEAT,
        payload: [cost, product]
    }
}

export const del = (iter: number) :object => {
    return {
        type: ACTION_DEL,
        payload: iter
    }
}
