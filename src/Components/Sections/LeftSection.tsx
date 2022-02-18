import { ReactElement } from 'react'

import { Component, Text, EmphasizedText, Image, Items } from './Components'

const LeftSection = (): ReactElement => {
    return (
        <Component row>
            <Items>
                <Text>Amazing Collaboration</Text>
                <EmphasizedText>Connect to everyone you need</EmphasizedText>
            </Items>
            <Items center>
                <Image />
                <Text>
                    You can work with everyone, anywhere. Just invite them, using email and get things done
                </Text>
            </Items>
        </Component>
    )
}

export default LeftSection