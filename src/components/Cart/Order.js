import {Form, Field} from "react-final-form";
import {Button, FormControl, FormLabel, Input} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeForm, resetForm, setForm} from "../../redux/ActionCreators";

function Order() {
    let dispatch = useDispatch()
    let formsField = useSelector((state) => state.cartReducer.form)
    function onSubmit(values) {
        dispatch(setForm(values))
    }
    return (
        <Form onSubmit={onSubmit}
              initialValues={{
                  name: "",
                  surname: "",
              }}
              render={({handleSubmit, form}) => (
                  <form onSubmit={handleSubmit}>
                      <FormControl>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Field name="name">
                              {props => <Input name={props.input.name}
                                               value={formsField["name"]}
                                               onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <FormControl>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Field name="surname">
                              {props => <Input name={props.input.name}
                                               value={formsField["surname"]}
                                               onChange={event => dispatch(changeForm(event))}
                              />}
                          </Field>
                      </FormControl>
                      <Button type={"submit"}>Submit</Button>
                      <Button type={"button"} onClick={() => dispatch(resetForm())}>Reset</Button>
                  </form>
              )}>

        </Form>
    )
}

export default Order