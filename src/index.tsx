import Shop from "./components/shop"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import { rootReducer } from "./components/store/reducers";
import {createStore} from "redux";
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Shop
            summary={ 0 }
            cart={ [] }
            addBread={ () => {} }
            addEggs={ () => {} }
            addBuckWheat={ () => {} }
            del={ (iter: number) => {} }
        />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
