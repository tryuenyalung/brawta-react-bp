import React from 'react'
import PropTypes from 'prop-types'
import {
    Card, 
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle} from 'reactstrap'

const AppCard = (props) => {
  return (
    <div>
        <Card className="shadow p-3 mb-5">
            {props.card_img}
            <CardBody>
                <CardTitle>{props.card_title}</CardTitle>
                <CardSubtitle>{props.card_subtitle}</CardSubtitle><br/>
                <CardText>{props.card_body}</CardText>
                {props.children}
            </CardBody>
        </Card>
    </div>
  )
}

AppCard.propTypes = {
    card_img: PropTypes.any,
    card_title: PropTypes.string,
    card_subtitle:PropTypes.any,
    card_body: PropTypes.string,
    children: PropTypes.any
}

export default AppCard
