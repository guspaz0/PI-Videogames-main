import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer";
//import listReducer from '../features/list/reducer';

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
    console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const rootReducer = combineReducers({
    reducer
});

//const persistedStore = loadFromLocalStorage();
const composed = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    reducer,
    //persistedStore,
    composed);

// store.subscribe(() => {
//     saveToLocalStorage(store.getState());
// });


// const store = createStore(reducer, composed);

export default store;