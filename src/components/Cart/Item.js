import {Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemButton, Typography} from "@mui/material";
import {decrementNumber, incrementNumber} from "../../redux/ActionCreators";
import {useDispatch} from "react-redux";

function Item(props) {
    let dispatch = useDispatch()
    return (
        <Box>
            <ListItem secondaryAction={
                <Box textAlign={"right"}>
                    <ListItemButton sx={{display: "inline"}}
                                    onClick={() => dispatch(incrementNumber(props.id))}>+</ListItemButton>
                    <Typography sx={{display: "inline"}}>
                        {props.number}
                    </Typography>
                    <ListItemButton sx={{display: "inline"}}
                                    onClick={() => dispatch(decrementNumber(props.id))}>-</ListItemButton>
                </Box>
            }>
                <ListItemAvatar>
                    <Avatar src={props.img} sx={{
                        display: {xs: "none", sm: "block"},
                        width: {sm: "50px", md: "100px", lg: "150px"},
                        height: "100%",
                        objectFit: 'contain',
                    }} variant={"square"}/>
                </ListItemAvatar>
                <Box sx={{width: {sm: "60%", lg: "70%"}}}>
                    <Typography variant={"h5"}>
                        <b>Name:</b> {props.name}
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        <b>Price:</b> {props.price}$
                    </Typography>
                    <Typography variant={"body1"} sx={{display: {xs: "none", sm: "block"}}}>
                        <b>Description:</b> {props.desc}
                    </Typography>
                </Box>
            </ListItem>
            <Divider variant={"fullWidth"}/>
        </Box>
    )
}

export default Item