import styled from 'styled-components'

type ComponentProps = {
    row?: Boolean
}

type ItemsProps = ComponentProps & {
    center?: Boolean,
    rightMargin?: string,
}

export const Component = styled.div<ComponentProps>`
display: flex;
align-items: center;
justify-content: center;
background-color: #f9fafb;
margin: 1rem 0;
font-family: cursive;
flex-direction: ${(props) => (props?.row ? 'row' : 'column')};
`

export const Text = styled.p`
    color: #9a9a9a;
    padding: 0;
    margin: 0.5rem;
    text-align: center;
`

export const EmphasizedText = styled.h4`
    padding: 0;
    margin: 1rem;
`
export const Image = styled.img`
    margin: 1rem 0;
    width: 40vw;
    height: 30vh;
    box-shadow: 2px 2px 1px 4px #a1b1f1;
    border-radius: 0.5rem;
    background-color: #fff;
`

export const Items = styled.div<ItemsProps>`
    display: flex;
    flex-direction: ${(props) => (props?.row ? 'row' : 'column')};
    margin: 1rem;
    margin-right: ${(props) => (props?.rightMargin ? props.rightMargin : '1rem')};
    align-items: ${(props) => (props?.center ? 'center' : 'flex-start')};
    justify-content: center;
`
