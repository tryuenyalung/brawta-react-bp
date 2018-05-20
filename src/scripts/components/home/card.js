
import React from 'react'

import {
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button } from 'reactstrap'

export default (props) => {
  return (
    <div>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                
            <CardBody>
                <CardTitle>{props.card_title}</CardTitle>
                <CardSubtitle>{props.card_subtitle}</CardSubtitle>
                <CardText>{props.card_text}</CardText>
                <Button className="float-right" onClick={props.btn_onClick} color={props.button_color}>{props.button_text}</Button>
            </CardBody>

        </Card>
    </div>
  )
}
