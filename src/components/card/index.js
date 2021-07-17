import React from 'react'
import { CardContainer, CardEmail, CardImage, CardName, CardNickName } from './CardElements'

const Card = ({robot}) => {
    return (
        <CardContainer>
            <CardImage src={`https://robohash.org/${robot.id}set=set2/?size=180x180`} alt='robot'/>
            <CardName>{robot.name}</CardName>
            
            <CardEmail>Email: {robot.email}</CardEmail>
        </CardContainer>
    )
}

export default Card
