import {createAction} from "redux-actions";
import {
    AddToCart,
    ChangeForm,
    DecrementNumber,
    IncrementNumber,
    LoadCatalog, LoadFromLocalStorage,
    RemoveFromCart,
    ResetForm,
    SetForm, ToggleIsFetching
} from "./ActionTypes";

export const addToCart = createAction(AddToCart)
export const removeFromCart = createAction(RemoveFromCart)
export const setForm = createAction(SetForm)
export const changeForm = createAction(ChangeForm)
export const resetForm = createAction(ResetForm)
export const incrementNumber = createAction(IncrementNumber)
export const decrementNumber = createAction(DecrementNumber)
export const loadCatalog = createAction(LoadCatalog)
export const toggleIsFetching = createAction(ToggleIsFetching)
export const loadFromLocalStorage = createAction(LoadFromLocalStorage)
