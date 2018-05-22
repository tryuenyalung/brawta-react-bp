import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container,
        Jumbotron,
        Button} from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar'
// import {get_post} from './../actions/post/get_post'
import {api_get, api_post} from './../actions/api'
import AppCard from './../components/global/AppCard'
import SearchBar from './../components/global/SearchBar'
import AppModal from './../components/global/AppModal'
import PostForm from './../forms/PostForm'

//get state
const mapStateToProps = state => { 
  return{
      //post initial state is empty
      // post: state.getPostReducer.get('post'),
      // error: state.getPostReducer.get('error'),
      // loader: state.getPostReducer.get('loading')


      data: state.apiReducer.get('data'),
      error: state.apiReducer.get('error'),
      loader: state.apiReducer.get('loading')
  }
}

//dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    api_get: () => dispatch( api_get() ),
    api_post: () => dispatch( api_post() ),
  }
}

class Axios extends Component {
  
  static propTypes = {
    loader: PropTypes.bool,
    error: PropTypes.any,
    post: PropTypes.array
  }

  constructor(props) {
    super(props)
  
    this.state = {
      modalPost: false 
    }
  }
  
  componentDidMount(){
    // this.props.get_post()
    this.props.api_get()
  }

  togglePostModal =()=> {
    this.setState({
      modalPost: !this.state.modalPost
    })
  }

 renderLoader =()=> (
    !this.props.loader ? null :
    (<Jumbotron className="text-center"><h1>Loading...</h1></Jumbotron>) 
  )

  renderPostError =()=> (
    this.props.error === null ? null : 
    (<Jumbotron className="text-center"><h1>{this.props.error}</h1></Jumbotron>) 
  )

  submitPost =values=>{
    // alert(JSON.stringify(values))
    this.props.api_post(values)
  }

  // renderPost =()=> (
  //   this.props.post === null ? null :
  //     this.props.post.map(post => (
  //       <div key={post.id}>
  //         <AppCard
  //           card_img=""
  //           card_title={`${post.id} . ${post.title}`}
  //           card_subtitle="subtitle"
  //           card_body={post.body}>
  //           <Button className="float-right"  color="danger">Delete</Button>
  //         </AppCard>
  //       </div>
  //   )).reverse()
  // )//@end

  renderPost =()=> { 
    return(
      this.props.data === null ? null :
        this.props.data.map(data => (
            <div key={data.id}>
              <AppCard
                card_img=""
                card_title={`${data.id} . ${data.title}`}
                card_subtitle="subtitle"
                card_body={data.body}>
                <Button className="float-right"  color="danger">Delete</Button>
              </AppCard>
            </div>
        )).reverse()
    )
  }//@end
     
  injectModal =()=>(
    <AppModal
      modal_state ={this.state.modalPost}
      modal_toggler ={this.togglePostModal}
      modal_title ={"Add Post"}
      modal_body = { <PostForm onSubmit={this.submitPost} /> }
      modal_footer = {null}
    />
  )

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
          {this.renderLoader()}
          {this.renderPostError()}
          {this.renderPost()}
          {this.injectModal()}
        </Container>
        
      </div>
    )
  }

}//@end


//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Axios)


