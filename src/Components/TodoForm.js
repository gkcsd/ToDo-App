import React, {useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types";

const ToDoForm = () => {
    return (
        <Form>
            <FormGroup>
                <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                //TODO: value, onChange 
                />
                <InputGroupAddon addonType="prepend">
                    <Button color="warning"
                    //TODO: onclick
                    >
                    Add
                    </Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};
export default ToDoForm;