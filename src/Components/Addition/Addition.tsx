import { ReactElement } from "react"
import styled from "styled-components"

const Component = styled.div`
    color: #adadad;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const IconsWrapper = styled.span`
    padding: 0.5rem;
    border: 1px solid #adadad;
    margin: 10px;
    border-radius: 0.5rem;
`
const Icon = styled.span`
    padding-right: .5rem;
`
const Addition = (): ReactElement => {
    return (
        <Component>
            <p>
                Used by
            </p>
            <Wrapper>
                <IconsWrapper><Icon>&#128512;</Icon>Regular People</IconsWrapper>
                <IconsWrapper><Icon>&#128507;</Icon>Developers</IconsWrapper>
                <IconsWrapper><Icon>&#128508;</Icon>Students</IconsWrapper>
                <IconsWrapper><Icon>&#128509;</Icon>Writers</IconsWrapper>
                <IconsWrapper><Icon>&#128510;</Icon>Enterprise</IconsWrapper>
                <IconsWrapper><Icon>&#128511;</Icon>Robots</IconsWrapper>
            </Wrapper>
        </Component>
    )
}

export default Addition