import {applyMiddleware, combineReducers, createStore} from "redux";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    catalogReducer,
    cartReducer,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)),
);


export default store