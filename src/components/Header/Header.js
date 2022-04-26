import {Badge, Box, Container, Grid} from "@mui/material";
import {NavLink, Link} from "react-router-dom";
import "./Header.css"
import {useSelector} from "react-redux";


function Header() {
    let totalPrice = useSelector(state => state.cartReducer.totalPrice)
    return (
        <header>
            <Container className={"header-container"}>
                <Grid container>
                    <Grid item xs={4} alignSelf={"center"}>
                        <Link to="catalog" className={"header-logo"}>myShop</Link>
                    </Grid>
                    <Grid item xs={8} alignSelf={"center"}>
                        <Grid container spacing={5} justifyContent="flex-end" alignSelf={"center"}>
                                <Grid item>
                                    <NavLink to="catalog" className={"header-nav"}>
                                        <span className={"fa fa-folder"}/> <Box component={"span"} sx={{
                                        display: {
                                            xs: "none",
                                            sm: "inline"
                                        }
                                    }}>Catalog</Box></NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink to="cart" className={"header-nav"}><span className={"fa fa-shopping-cart"}/>
                                        <Box component={"span"} sx={{display: {xs: "none", sm: "inline"}}}>
                                            <Badge badgeContent={totalPrice} max={9999} color="primary">
                                                Cart
                                            </Badge>
                                        </Box>
                                    </NavLink>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header