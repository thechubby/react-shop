import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import {addBread, addBuckWheat, addEggs, del} from "./store/actions";

export const ACTION_ADD_BREAD = 'ACTION_ADD_BREAD';
export const ACTION_ADD_EGGS = 'ACTION_ADD_EGGS';
export const ACTION_ADD_BUCKWHEAT = 'ACTION_ADD_BUCKWHEAT';
export const ACTION_DEL = "ACTION_DEL"

interface PropsInterface {
    summary: number,
    cart: string[],
    addBread (cost: number, product: string): void,
    addEggs (cost: number, product: string): void,
    addBuckWheat (cost: number, product: string): void
    del(iter: number): void
}

interface StateInterface {

}

export class Shop extends React.Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
    }

    render(): React.ReactNode {
        let { summary, cart, addBread, addEggs, addBuckWheat, del } = this.props;
        return (
            <div>
                <div>
                    <div>
                    Сумма: {summary} <br/>
                        Вы выбрали:
                        <div>
                            Хлеб 20 рублей
                            <button onClick={() => addBread(20, 'Хлеб')}>Добавить</button>
                        </div>
                        <div>
                            Яйца 70 рублей
                            <button onClick={() => addEggs(70, 'Яйца')}>Добавить</button>
                        </div>
                        <div>
                            Гречка 86 рублей
                            <button onClick={() => addBuckWheat(86, 'Гречка')}>Добавить</button>
                        </div>
                    </div>
                        <div>
                            <ul>
                                {React.Children.map(cart, (n: string, i: number) =>
                                    (<li
                                        key={n}>
                                        <button onClick={() => del(i)}>Удалить</button>
                                        {i} {n}
                                    </li>))}
                            </ul>
                        </div>
                </div>
            </div>
        );
    }
}

const putStateToProps = (state: PropsInterface) :object => {
    return {
        cart: state.cart,
        summary: state.summary
    };
};

const putActionsToProps = (dispatch: Dispatch<any>) :object => {
    return {
        addBread: bindActionCreators(addBread, dispatch),
        addEggs: bindActionCreators(addEggs, dispatch),
        addBuckWheat: bindActionCreators(addBuckWheat, dispatch),
        del: bindActionCreators(del, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Shop);
