import {Box, Container, Grid} from "@mui/material";
import {NavLink, Link} from "react-router-dom";
import "./Header.css"


function Header() {
    return (
        <header>
            <Container className={"header-container"}>
                <Grid container>
                    <Grid item xs={4}>
                        <Link to="catalog" className={"header-logo"}>myShop</Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={5} justifyContent="flex-end">
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
                                <NavLink to="cart" className={"header-nav"}><span className={"fa fa-shopping-cart"}/> <Box
                                    component={"span"} sx={{display: {xs: "none", sm: "inline"}}}>Cart</Box></NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header