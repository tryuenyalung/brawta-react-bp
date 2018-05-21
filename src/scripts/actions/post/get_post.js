import axios from 'axios'
import {application_properties as keys} from './../../constants/application_properties'

export const GET_POST_PENDING = 'GET_POST_PENDING'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_ERROR = 'GET_POST_ERROR'

// action async container (thunk)
export const get_post = () => {

    return (dispatch) => {
        dispatch( get_post_pending() )
        axios.get( `${keys.POST_API}/posts` )
        .then( res => dispatch( get_post_success(res.data)) )
        .catch( err => dispatch( get_post_error(err.response)) )
    }

}

export const get_post_by_id = (id) => {

    return (dispatch) => {
        dispatch( get_post_pending() )
        axios.get( `${keys.POST_API}/posts/${id}` )
        .then( res => dispatch( get_post_success(res.data)) )
        .catch( err => dispatch( get_post_error(err.response)) )
    }

}

// action creators retutrn an object that triggers dispatch on reducers 
export const get_post_pending = () => {
    return{
        type: GET_POST_PENDING
    }
}
 
export const get_post_success = (data) => {
    return{
        type: GET_POST_SUCCESS,
        data: data
    }
}

export const get_post_error = (error) => {
    return{
        type: GET_POST_ERROR,
        error: error
    }
}


