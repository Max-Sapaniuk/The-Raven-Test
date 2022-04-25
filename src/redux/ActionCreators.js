import {createAction} from "redux-actions";
import {AddToCart, ChangeForm, RemoveFromCart, ResetForm, SetForm} from "./ActionTypes";

export const addToCart = createAction(AddToCart)
export const removeFromCart = createAction(RemoveFromCart)
export const setForm = createAction(SetForm)
export const changeForm = createAction(ChangeForm)
export const resetForm = createAction(ResetForm)
