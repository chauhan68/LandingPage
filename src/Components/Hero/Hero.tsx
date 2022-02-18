import { ReactElement } from 'react';
import styled from 'styled-components';

import Form from '../../Components/Form/Form'
import Addition from '../../Components/Addition/Addition'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    text-align: center;
    font-family: cursive;
`
const Slogan = styled.h1`
    font-size: 4rem;
`

const Text = styled.p`
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
`

const Hero = (): ReactElement => {
    return (
        <Component>
            <Slogan>
                Make your tasks unique
            </Slogan>
            <Text>
                Superhero To-Do List helps you solve the problems
            </Text>
            <Text>
                Simple and easy
            </Text>
            <Form />
            <Addition />
        </Component>
    )
}

export default Hero