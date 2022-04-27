import Product from "./Product";
import {CircularProgress, Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadCatalogThunk} from "../../thunk/thunk";
import {loadFromLocalStorage} from "../../redux/ActionCreators";

function Catalog() {
    let catalog = useSelector(state => state.catalogReducer)
    let dispatch = useDispatch();
    let products = useSelector(state => state.cartReducer.products)

    useEffect(() => {
        if (catalog.products.length === 0 && catalog.isFetching === false)
            loadCatalogThunk(dispatch)
    })

    useEffect(() => {
        if (products.length === 0 && JSON.parse(window.localStorage.getItem("products")).length !== 0){
            debugger
            JSON.parse(window.localStorage.getItem("products").length)
            dispatch(loadFromLocalStorage())
        }
    })

    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2} sx={{display: "flex"}}>
                {catalog.isFetching ?
                    <Grid item xs={12} sx={{textAlign: "center"}}>
                        <CircularProgress size={"75px"} sx={{margin: "20px"}}/>
                    </Grid>
                    :
                    catalog.products.map((prod) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={prod.id} >
                                <Product id={prod.id} name={prod.name} img={prod.img} price={prod.price}
                                         desc={prod.desc}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Catalog