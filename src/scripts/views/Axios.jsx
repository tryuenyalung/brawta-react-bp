import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Jumbotron,
  Card, 
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar.jsx';
import {get_post} from './../actions/post/get_post'
 

//get state
const mapStateToProps = state => { 
  return{
      //post initial state is empty
      post: state.getPostReducer.get('post'),
      loader: state.getPostReducer.get('loading')
  }
}

//dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    get_post: () => dispatch( get_post() ),
  }
}

class Axios extends Component {
  
  componentWillMount(){
    this.props.get_post()
  }


  render() {

    const renderLoader = ( 
      this.props.loader ? 
      (<Jumbotron className="text-center"><h1>Loading...</h1></Jumbotron>) 
      : null
    )

    const renderPost  = (
      this.props.post !== null  ?
      this.props.post.map(post => (
        <div key={post.id}>
          <Card >
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>{post.title}</CardSubtitle><br/>
              <CardText>{post.body}</CardText>
              <Button className="float-right"  color="danger">Delete</Button>
            </CardBody>
          </Card>
          <br/>
        </div>
      )) : null
    )//@end
       

    return (
      <div>
        <AppNavBar/><br/>

        <Container>
          {renderLoader}
          {renderPost}
        </Container>
        
      </div>
    )

  }

}//@end


//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Axios)


