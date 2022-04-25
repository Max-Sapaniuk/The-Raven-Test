import "./Footer.css"
import {Container, Grid} from "@mui/material";

function Footer() {
    return (
        <footer>
            <Container>
                <Grid container alignItems={"center"}>
                    <Grid item xs={12} sm={6}>
                        <span className={"fa fa-copyright"}/> The site was developed by Maksym Sapaniuk
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container justifyContent={{xs: "flex-start", sm:"flex-end"}}>
                            <Grid item>
                                <div>My contacts:</div>
                                <div>
                                    <span className={"fa fa-envelope"}/>
                                    <a href="mailto:maksym.sapaniuk@gmail.com"
                                       className={"link"}>maksym.sapaniuk@gmail.com</a>
                                </div>
                                <div>
                                    <span className={"fa fa-phone"}/>
                                    <a href="tel:+380964624638"
                                       className={"link"}>+380964624638</a></div>
                                <div>
                                    <span className={"fa fa-telegram"}/>
                                    <a href="https://t.me/max_sapaniuk"
                                       className={"link"}>t.me/max_sapaniuk</a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer