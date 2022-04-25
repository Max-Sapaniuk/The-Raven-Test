import {handleActions} from 'redux-actions';
import {addToCart, changeForm, removeFromCart, resetForm, setForm} from "./ActionCreators";

let cartReducer = handleActions(
    {
        [addToCart]: (state, product) => {
            state.products = [...state.products, product.payload]
            return {...state}
        },
        [removeFromCart]: (state, product) => {
            for (let i in state.products) {
                if (state.products[i].id === product.payload.id) {
                    state.products.splice(Number(i), 1)
                    break
                }
            }
            state.products = [...state.products]
            return {...state}
        },
        // [setForm]: (state, data) => {
        //     state.form = {...data.payload}
        //     return {...state}
        // },
        [changeForm]: (state, data) => {
            state.form = {...state.form}
            if (state.form[data.payload.target.name] === undefined)
                state.form[data.payload.target.name] = ""
            state.form[data.payload.target.name] = data.payload.target.value
            return {...state}
        },
        [resetForm]: (state) => {
            let newState = Object.assign({}, state)
            newState.form = {
                name: "",
                surname: "",
            }
            return newState
        },
    },
    {
        products: [],
        form: {
            name: "",
            surname: "",
        }
    }
)
export default cartReducer