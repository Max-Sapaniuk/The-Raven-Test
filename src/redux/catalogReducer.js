import {handleActions} from 'redux-actions';
import {loadCatalog, toggleIsFetching} from "./ActionCreators";


let catalogReducer = handleActions(
    {
        [loadCatalog]: (state, data) => {
            state.products = [...data.payload]
            return {...state}
        },
        [toggleIsFetching]: (state) => {
            state.isFetching = !state.isFetching
            return {...state}
        }
    },
    {
        products: [],
        isFetching: false
    }
)
export default catalogReducer