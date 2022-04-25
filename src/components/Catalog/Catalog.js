import Product from "./Product";
import {Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";

function Catalog() {
    let products = useSelector(state => state.catalogReducer.products)
    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {
                    products.map((prod) => {
                        return (
                            <Grid item xs key={prod.id}>
                                <Product id={prod.id} name={prod.name} img={prod.img} price={prod.price} desc={prod.desc}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Catalog