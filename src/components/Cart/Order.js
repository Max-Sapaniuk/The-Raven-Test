import {Form, Field} from "react-final-form";
import {Button, FormControl, FormLabel, Input, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeForm, resetForm, setForm} from "../../redux/ActionCreators";
import {ref, set, get} from "firebase/database";
import {database} from "../../index";

function Order() {
    let dispatch = useDispatch()
    let cart = useSelector((state) => state.cartReducer)

    function onSubmit() {
        let order = []
        order.user = cart.form
        order.product = {}
        for (let i of cart.products)
            order.product[i.id] = i.number
        get(ref(database, "orders"))
            .then(response => set(ref(database, `orders/${response.val().length}`), order).then(r => console.log("Done!")))
    }

    return (
        <Form onSubmit={onSubmit}
              initialValues={{
                  name: "",
                  surname: "",
                  address: "",
                  phone: "",
              }}
              render={({handleSubmit, form}) => (
                  <form onSubmit={handleSubmit}>
                      <FormControl>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Field name="name">
                              {props => <TextField name={props.input.name}
                                                   value={cart.form["name"]}
                                                   variant="standard"
                                                   onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Field name="surname">
                              {props => <TextField name={props.input.name}
                                                   value={cart.form["surname"]}
                                                   variant="standard"
                                                   onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="address">Address</FormLabel>
                          <Field name="address">
                              {props => <TextField name={props.input.name}
                                                   value={cart.form["address"]}
                                                   variant="standard"
                                                   onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="phone">Phone</FormLabel>
                          <Field name="phone">
                              {props => <TextField name={props.input.name}
                                                   value={cart.form["phone"]}
                                                   variant="standard"
                                                   onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <br/>
                      <Button type={"submit"} variant={"contained"}
                              sx={{marginTop: "5px", marginRight: "5px", color: "success"}}>Order</Button>
                      <Button type={"button"} variant={"contained"} sx={{marginTop: "5px"}} color={"error"}
                              onClick={() => dispatch(resetForm())}>Reset</Button>
                  </form>
              )}>

        </Form>
    )
}

export default Order