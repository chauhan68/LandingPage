import { ReactElement } from 'react'

import { Component, Text, EmphasizedText, Image } from './Components'

const MiddleSection = (): ReactElement => {
    return (
        <Component>
            <Text>Innovation in every details</Text>
            <EmphasizedText>SuperHero Tasks</EmphasizedText>
            <Image />
            <Text>You won't need another To-Do List app</Text>
        </Component>
    )
}

export default MiddleSection