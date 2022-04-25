import {combineReducers, createStore} from "redux";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
    catalogReducer,
    cartReducer,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
);


export default store