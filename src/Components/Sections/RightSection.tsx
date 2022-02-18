import { ReactElement } from 'react'

import { Component, Text, EmphasizedText, Image, Items } from './Components'

const RightSection = (): ReactElement => {
    return (
        <Component row>
            <Items center>
                <Image />
                <Text>
                    SuperHero To-Do List allows you to work with unique features
                    not found in any other To-Do List. You'll really always be locked in to perform your tasks
                </Text>
            </Items>
            <Items rightMargin="4rem">
                <Text>Incredible Features</Text>
                <EmphasizedText>Universal app to manage your tasks</EmphasizedText>
            </Items>
        </Component>
    )
}

export default RightSection