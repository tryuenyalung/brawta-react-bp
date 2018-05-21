import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container,
        Jumbotron,
        Button} from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar'
import {get_post} from './../actions/post/get_post'
import AppCard from './../components/global/AppCard'
import SearchBar from './../components/global/SearchBar'
import AppModal from './../components/global/AppModal'

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
  
  static propTypes = {
    loader: PropTypes.bool,
    post: PropTypes.array
  }

  constructor(props) {
    super(props)
  
    this.state = {
      modalPost: false 
    }
  }
  
  componentDidMount(){
    this.props.get_post()
  }


  togglePostModal =()=> {
    this.setState({
      modalPost: !this.state.modalPost
    })
  }

 renderLoader =()=> ( 
    this.props.loader ? 
    (<Jumbotron className="text-center"><h1>Loading...</h1></Jumbotron>) 
    : null
  )

  renderPost =()=> (
    this.props.post !== null  ?
      this.props.post.map(post => (

        <div key={post.id}>
          <AppCard
            card_img=""
            card_title={`${post.id} . ${post.title}`}
            card_subtitle="subtitle"
            card_body={post.body}>
            <Button className="float-right"  color="danger">Delete</Button>
          </AppCard>
        </div>
        
    )) : null
  )//@end
     


  render() {
    return (
      <div>
        <AppNavBar/><br/><br/><br/>
      
        <Container>
 
          <SearchBar
            search_placeholder ={"Search for post.."}
            search_btn_location ={"append"}
            search_btn= {<Button color="secondary"><i className="fa fa-search"></i></Button>}
          />

          <Button color="primary" className="btn-block " onClick={this.togglePostModal}>Add Post</Button><br/>
          
          <AppModal
            modal_state ={this.state.modalPost}
            modal_toggler ={this.togglePostModal}
            modal_title ={"Add Post"}
            modal_body = {"This is body, to filled with form later"}
            modal_footer = {<Button color="primary" onClick={this.togglePostModal}><i className="fa fa-plus-circle fa-lg"></i></Button>}
          />

          {this.renderLoader()}
          {this.renderPost()}
        </Container>
        
      </div>
    )
  }

}//@end


//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Axios)


