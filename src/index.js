import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './Styles/index.scss';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore'
import  * as Action from './actions/expenses'
import * as serviceWorker from './serviceWorker';
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(Action.addExpense({description: 'Water bill', amount:400}));
store.dispatch(Action.addExpense({description: 'Gas bill', amount:500, createdDate:1000}));
store.dispatch(Action.addExpense({description: 'Rent', amount:1400, createdDate: 109500}));
// store.dispatch(Action.setTextFilter("Water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
