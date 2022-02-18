import { ReactElement } from "react"
import styled from "styled-components"

const FormComponent = styled.form`
    margin: 10px;
`
const Input = styled.input`
    padding: 1rem;
    margin: 1rem;
    border-radius: .5rem;
    border: 1px solid #a1a1a1;

    &:focus {
        border: 2px solid #a4b326; 
    }
    &:focus-visible {
        outline: 0;
    }
`

const Button = styled.button`
    padding: 1rem;
    background-color: #68d391;
    border-radius: .5rem;
    border: 0;
    color: #fff;
    transition: 0.25s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(120%);
    }
`

const Form = (): ReactElement => {
    return (
        <FormComponent>
            <Input type="email" placeholder="Enter your email" />
            <Button>Send me the app</Button>
        </FormComponent>
    )
}

export default Form