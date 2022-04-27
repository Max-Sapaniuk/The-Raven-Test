import {Box, Container, Grid, List} from "@mui/material";
import Order from "./Order";
import {useDispatch, useSelector} from "react-redux";
import Item from "./Item";
import {Link} from "react-router-dom"
import {useEffect} from "react";
import {loadFromLocalStorage} from "../../redux/ActionCreators";

function Cart() {
    let products = useSelector(state => state.cartReducer.products)
    let totalPrice = useSelector(state => state.cartReducer.totalPrice)
    let dispatch = useDispatch()
    useEffect(() => {
        if (products.length === 0 && JSON.parse(window.localStorage.getItem("products")).length !== 0){
            dispatch(loadFromLocalStorage())
        }
    })
    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={9}>
                    <Grid container>
                        {products.length === 0
                            ?
                            <div style={{fontSize: "24px", fontWeight: "bold"}}>Cart is empty, add more products
                                in <Link to={"/catalog"}>Catalog</Link>!</div>
                            :
                            <Box sx={{width: "100%"}}>
                                <List>
                                    {products.map((prod) => {
                                        return (
                                            <Grid item xs={12} key={prod.id}>
                                                <Item id={prod.id} name={prod.name} img={prod.img} price={prod.price}
                                                      desc={prod.desc} number={prod.number}/>
                                            </Grid>
                                        )
                                    })}
                                </List>
                                <b>TOTAL: {totalPrice}$</b>
                            </Box>
                        }

                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Order/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart