import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import {add, del} from "./store/actions";

export const ACTION_ADD = 'ACTION_ADD';
export const ACTION_DEL = "ACTION_DEL"

interface PropsInterface {
    summary: number,
    cart: string[],
    add (cost: number, product: string): void,
    del(iter: number): void
}

interface StateInterface {

}

export class Shop extends React.Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
    }

    render(): React.ReactNode {
        let { summary, cart, add, del } = this.props;
        return (
            <div>
                <div>
                    <div>
                    Сумма: {summary} <br/>
                        Вы выбрали:
                        <div>
                            Хлеб 20 рублей
                            <button onClick={() => add(20, 'Хлеб')}>Добавить</button>
                        </div>
                        <div>
                            Яйца 70 рублей
                            <button onClick={() => add(70, 'Яйца')}>Добавить</button>
                        </div>
                        <div>
                            Гречка 86 рублей
                            <button onClick={() => add(86, 'Гречка')}>Добавить</button>
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
        add: bindActionCreators(add, dispatch),
        del: bindActionCreators(del, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Shop);
