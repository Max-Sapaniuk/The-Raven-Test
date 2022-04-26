import {createAction} from "redux-actions";
import {
    AddToCart,
    ChangeForm,
    DecrementNumber,
    IncrementNumber,
    RemoveFromCart,
    ResetForm,
    SetForm
} from "./ActionTypes";

export const addToCart = createAction(AddToCart)
export const removeFromCart = createAction(RemoveFromCart)
export const setForm = createAction(SetForm)
export const changeForm = createAction(ChangeForm)
export const resetForm = createAction(ResetForm)
export const incrementNumber = createAction(IncrementNumber)
export const decrementNumber = createAction(DecrementNumber)
