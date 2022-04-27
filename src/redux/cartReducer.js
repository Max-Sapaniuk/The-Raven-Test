import {handleActions} from 'redux-actions';
import {
    addToCart,
    changeForm,
    decrementNumber,
    incrementNumber,
    removeFromCart,
    resetForm,
    loadFromLocalStorage
} from "./ActionCreators";

let cartReducer = handleActions(
    {
        [addToCart]: (state, product) => {
            let newProd = {...product.payload, number: 1}
            state.totalPrice += product.payload.price
            state.products = [...state.products, newProd]
            window.localStorage.setItem("products", JSON.stringify(state.products))
            return {...state}
        },
        [removeFromCart]: (state, product) => {
            for (let i in state.products) {
                if (state.products[i].id === product.payload.id) {
                    state.totalPrice -= (state.products[i].price * state.products[i].number)
                    state.products.splice(Number(i), 1)
                    break
                }
            }
            state.products = [...state.products]
            window.localStorage.setItem("products", JSON.stringify(state.products))
            return {...state}
        },
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
                address: "",
                phone: "",
            }
            return newState
        },
        [incrementNumber]: (state, product) => {
            for (let i in state.products){
                if (state.products[i].id === product.payload) {
                    state.totalPrice += state.products[i].price
                    state.products[i].number += 1
                    break
                }
            }
            state.products = [...state.products]
            window.localStorage.setItem("products", JSON.stringify(state.products))
            return {...state}

        },
        [decrementNumber]: (state, product) => {
            for (let i in state.products){
                if (state.products[i].id === product.payload) {
                    state.products[i].number -= 1
                    state.totalPrice -= state.products[i].price
                    if (state.products[i].number === 0)
                        state.products.splice(i, 1)
                    break
                }
            }
            state.products = [...state.products]
            window.localStorage.setItem("products", JSON.stringify(state.products))
            return {...state}
        },
        [loadFromLocalStorage]: (state)=>{
            state.products = [...JSON.parse(window.localStorage.getItem("products"))]
            state.totalPrice = 0
            for (let i of state.products)
                state.totalPrice += (parseInt(i.price) * i.number)
            return {...state}
        }
    },
    {
        products: [],
        form: {
            name: "",
            surname: "",
            address: "",
            phone: "",
        },
        totalPrice: 0,

    }
)
export default cartReducer