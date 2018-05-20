import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
const NotFound = () => {
  return (
    <div>
      <Container ><br/>
        <Jumbotron className="text-center">
            <h1  className="align-middle">Not Found</h1>
        </Jumbotron>
      </Container>
    </div>
  )
}

export default NotFound
