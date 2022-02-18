import styled from 'styled-components'

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    color: #fff;
    background-color: #123;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 2rem;
`

const Header = styled.p``

const Link = styled.a`
    color: #ddd;
    text-decoration: none;
    margin: .5rem;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
`

const Footer = () => {
    return (
        <Component>
            <Wrapper>
                <Header>Super Hero Inc. is a company that makes people productive</Header>
                <Row>
                    <Link href="#">About us</Link>
                    <Link href="#">Our Vision</Link>
                    <Link href="#">Products</Link>
                    <Link href="#">Contact us</Link>
                </Row>

                <Row>
                    <Link href="#">Github</Link>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Linkedin</Link>
                </Row>

                <div>&copy; Super Hero Inc</div>
                <div>Legal Information</div>
                <div>Cookie Policy</div>
            </Wrapper>
        </Component>
    )
}

export default Footer