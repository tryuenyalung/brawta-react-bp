import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container,
        Jumbotron,
        Row,
        Col,
        Button} from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar'
// import {get_post} from './../actions/post/get_post'
import {application_properties as keys} from './../constants/application_properties'
import {api_get, api_post, api_delete, api_put} from './../actions/api'
import AppCard from './../components/global/AppCard'
import SearchBar from './../components/global/SearchBar'
import AppModal from './../components/global/AppModal'
import PostForm from './../forms/PostForm'

//get state
const mapStateToProps = state => { 
  return{
      data: state.apiReducer.get('data'),
      error: state.apiReducer.get('error'),
      loader: state.apiReducer.get('loading')
  }
}

//dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    api_get: (url) => dispatch( api_get(url) ),
    api_post: (values) => dispatch( api_post(values) ),
    api_delete: (id) => dispatch( api_delete(id) ),
    api_put: (id, values) => dispatch( api_put(id,values) )
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
      modalPost: false,
      modalPut: false,

      updatePostData: {
        id: null,
        userId: null,
        title: null,
        body: null
      }

    }
  }
  
  componentDidMount(){
    this.props.api_get(`${keys.POST_API}/posts`)
  }

  togglePostModal =()=> {
    this.setState({
      modalPost: !this.state.modalPost
    })
  }

  togglePutModal =()=> {
    this.setState({
      modalPut: !this.state.modalPut
    })
  }

  renderLoader =()=> (
    !this.props.loader ? null :
    (<Jumbotron className="text-center"><h1>Loading...</h1></Jumbotron>) 
  )

  renderPostError =()=> (
    this.props.error === null ? null : 
    (<Jumbotron className="text-center">
      <Row>
        <Col>
        <p>{JSON.stringify(this.props.error.response,null,'\t')}</p>
        </Col>
      </Row>
    </Jumbotron>) 
  )

  createPost =values=>{
    this.props.api_post(values)
    this.togglePostModal()
  }

  updatePost =values=>{
    this.props.api_put(this.state.updatePostData.id, values)
    this.togglePutModal()
  }

  deletePost =id=>{
    this.props.api_delete(id)
  }


 

  renderPost =()=> { 
    console.log('post rendered');
    return(
      this.props.data === null ? null :
        this.props.data.map(data => (
            <div key={data.id}>
              <AppCard
                card_img=""
                card_title={`${data.id} . ${data.title}`}
                card_subtitle="subtitle"
                card_body={data.body}>
                <Button  onClick={ () => this.deletePost(data.id) }  className="float-right"  color="danger">Delete</Button>
                <Button  onClick={ () => this.setUpdatePostData(data.id, data.userId, data.title, data.body) }  className="float-right" color="info">Update</Button>
              </AppCard>
            </div>
        )).reverse()
    )
  }//@end


  
  injectPostModal =()=>(
    <AppModal
      modal_state ={this.state.modalPost}
      modal_toggler ={this.togglePostModal}
      modal_title ={"Add Post"}
      modal_body = { <PostForm id ="" userId="" title="" body="" click={this.togglePostModal} onSubmit={this.createPost} /> }
      modal_footer = {null}
    />
  )

  injectPutModal =()=>(
    <AppModal
      modal_state ={this.state.modalPut}
      modal_toggler ={this.togglePutModal}
      modal_title ={"Update Post"}
      
      modal_body = { 
      <PostForm  
        id={this.state.updatePostData.id} 
        userId={this.state.updatePostData.userId} 
        title={this.state.updatePostData.title} 
        body={this.state.updatePostData.body} 
        click={this.togglePutModal} 
        onSubmit={this.updatePost} 
      /> }

      modal_footer = {null}
    />
  )

  setUpdatePostData=(id, userId, title, body)=>{
    this.setState({
      updatePostData: {
        id: id,
        userId: userId,
        title: title,
        body: body
      }
    })

    this.togglePutModal()
  }






  render() {
    return (
      <div>
        <AppNavBar/><br/><br/><br/>
      
        <Container>
 
          <SearchBar
            search_placeholder ={"Search for post.."}
            search_btn_location ={"append"}
            search_btn= {<Button  className="btn-outline-dark"><i className="fa fa-search"></i></Button>}
          />

          <Row>
            <Col>
              <Button color="primary" className="btn-outline-primary" onClick={ () => window.location.reload() } ><i className="fa fa-recycle"/></Button>
              <Button color="primary" className="btn-outline-dark float-right" onClick={this.togglePostModal}>Add Post</Button>
            </Col>
          </Row><br/>


          {this.renderLoader()}
          {this.renderPostError()}
          {this.renderPost()}
          {this.injectPostModal()}
          {this.injectPutModal()}
        </Container>
        
      </div>
    )
  }

}//@end


//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Axios)


