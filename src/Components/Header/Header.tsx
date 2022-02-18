import { ReactElement } from "react";
import styled from "styled-components";

const Component = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    margin: 0.5rem;
    background-color: transparent;
    border: 0;
    padding: 1rem;
    border-radius: .75rem;
    transition: background-color 0.25s ease-in;

    &:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }
`


const Header = (): ReactElement => {
    return (
        <Component>
            <Button>Features</Button>
            <Button>Pricing</Button>
            <Button>Blog</Button>
        </Component>
    )
}

export default Header