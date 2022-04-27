import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/ActionCreators";

function Product(props) {
    let dispatch = useDispatch()
    let cart = useSelector(state => state.cartReducer.products)
    let inCart = false
    for (let prod of cart) {
        if (Number(prod.id) === props.id) {
            inCart = true
            break
        }
    }
    return (
        <Card sx={{width: 350, margin: "auto"}}>
            <CardMedia
                component="img"
                sx={{width: "100%", height: "300px", objectFit: 'contain'}}
                // height="250"
                // width={"400"}
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name.length > 25 ? props.name.slice(0, 25) + "..." : props.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc.length > 40 ? props.desc.slice(0, 40) + "..." : props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                {inCart
                    ?
                    <Button variant={"contained"} color={"error"} onClick={() => dispatch(removeFromCart({id: props.id}))}>Remove from Cart</Button>
                    :
                    <Button variant={"contained"} color={"success"} onClick={() => dispatch(addToCart({...props}))}>Add to Cart</Button>
                }
            </CardActions>
        </Card>
    )
}

export default Product
