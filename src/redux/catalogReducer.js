import {handleActions} from 'redux-actions';
import {addToCard} from "./ActionCreators";

let catalogReducer = handleActions(
    {
        // [addToCard]: (state)=>{
        //     state.products.pop()
        //     state.products = [...state.products]
        //     return {...state}
        // }
    },
    {
        products: [
            {
                id: 0,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            },
            {
                id: 1,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prodThis is a test prodThis is a test prodThis is a test prod",
            },
            {
                id: 2,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            }, {
                id: 3,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            }, {
                id: 4,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            }, {
                id: 5,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            }, {
                id: 6,
                name: "Test",
                img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
                price: "300 грн.",
                desc: "This is a test prod",
            },
        ]
    }
)
export default catalogReducer