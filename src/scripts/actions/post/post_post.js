import axios from 'axios'
import {application_properties as keys} from './../../constants/application_properties'

export const POST_POST_PENDING = 'POST_POST_PENDING'
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS'
export const POST_POST_ERROR = 'POST_POST_ERROR'

// action async container (thunk)
export const get_post = (postData) => {

    return (dispatch) => {
        dispatch( get_post_pending() )
        axios.post( `${keys.POST_API}/posts`, JSON.stringify(postData) )
          .then(res => dispatch( post_post_success(res.data) ))
          .catch(err => dispatch( post_post_error(err.response) ))
    }

}

 

// action creators retutrn an object that triggers dispatch on reducers 
export const post_post_pending = () => {
    return{
        type: POST_POST_PENDING
    }
}
 
export const post_post_success = (data) => {
    return{
        type: POST_POST_SUCCESS,
        data: data
    }
}

export const post_post_error = (error) => {
    return{
        type: POST_POST_ERROR,
        error: error
    }
}


