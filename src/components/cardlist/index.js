import React from 'react'
import Card from '../card'
import { CardListContainer } from './CardListElements'

const CardList = ({robots}) => {
    return (
        <CardListContainer>
            {robots.map(robot => (
                <Card robot={robot} key={robot.id}></Card>
            ))}
        </CardListContainer>
    )
}

export default CardList
