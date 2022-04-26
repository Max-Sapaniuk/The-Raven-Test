import {Box, Container, Grid, List} from "@mui/material";
import Order from "./Order";
import {useSelector} from "react-redux";
import Item from "./Item";
import {Link} from "react-router-dom"

function Cart() {
    let products = useSelector(state => state.cartReducer.products)
    let totalPrice = useSelector(state => state.cartReducer.totalPrice)
    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={9}>
                    <Grid container>
                        {products.length === 0
                            ?
                            <div style={{fontSize: "24px", fontWeight: "bold"}}>Cart is empty, add more products in <Link to={"/catalog"}>Catalog</Link>!</div>
                            :
                            <Box sx={{width: "100%"}}>
                                <List>
                                    {products.map((prod) => {
                                        return (
                                            <Grid xs={12}>
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