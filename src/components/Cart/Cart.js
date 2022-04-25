import {Container, Grid} from "@mui/material";
import Order from "./Order";

function Cart() {
    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={9}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi doloribus eum illo illum impedit iure saepe. Accusamus aliquid dolorum incidunt ipsum libero mollitia officia quisquam sit vel voluptas. Et excepturi odit perferendis perspiciatis possimus sapiente voluptatibus. Animi beatae cupiditate eius numquam velit! Asperiores autem cumque delectus exercitationem, facere id ipsa magni, maiores modi, quasi quibusdam quos rerum tempore voluptas voluptates. Accusamus aliquid animi assumenda, at atque consectetur consequuntur cum cupiditate debitis dicta dolorem dolores ea et, exercitationem explicabo facere hic impedit ipsum necessitatibus neque nesciunt optio perferendis praesentium quaerat quam quis quos ratione rem repellat rerum sit vitae voluptatibus?
                </Grid>
                <Grid item xs={3}>
                    <Order/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart