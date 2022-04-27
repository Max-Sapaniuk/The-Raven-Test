import {get, ref} from "firebase/database";
import {database} from "../index";
import {loadCatalog, toggleIsFetching} from "../redux/ActionCreators";

export function loadCatalogThunk(dispatch) {
    dispatch(toggleIsFetching())
    get(ref(database, "products")).then(response => {
        dispatch(loadCatalog(response.val()))
        dispatch(toggleIsFetching())
    })
}