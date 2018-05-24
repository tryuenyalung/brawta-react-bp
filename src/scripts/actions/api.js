import axios from 'axios'
import {application_properties as keys} from './../constants/application_properties'


export const API_GET_SUCCESS = 'API_GET_SUCCESS'
export const API_GET_ONE_SUCCESS = 'API_GET_ONE_SUCCESS'
export const API_POST_SUCCESS = 'API_POST_SUCCESS'
export const API_PUT_SUCCESS = 'API_PUT_SUCCESS'
export const API_DELETE_SUCCESS = 'API_DELETE_SUCCESS'
export const API_PENDING = 'API_PENDING'
export const API_ERROR = 'API_ERROR'


// thunk, promise actions
export const api_get = () => {

    return (dispatch) => {
        dispatch( api_pending() )
        axios.get( `${keys.POST_API}/posts` )
            .then( res => dispatch( api_get_success(res.data)) )
            .catch( err => dispatch( api_error(err.response)) )
    }

}

export const api_post = (postData) => {
    
    const config = {
        method: 'POST',
        url: `${keys.POST_API}/posts`,
        data: JSON.stringify(postData),
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return (dispatch) => {
        // axios(config)
        dispatch( api_pending() )
        axios(config)
            .then(res => dispatch( api_post_success(res.data) ))
            .catch(err => dispatch( api_error( err ) ))
    }

}

export const api_delete = (id) => {
    
    const config = {
        method: 'DELETE',
        url: `${keys.POST_API}/posts/${id}` 
    }

    return (dispatch) => {
        // axios(config)
        dispatch( api_pending() )
        axios(config)
            .then(res => dispatch( api_delete_success( id) ))
            .catch(err => dispatch( api_error( err ) ))
    }

}


// action creator
export const api_get_success = (data) => {
    return{ type: API_GET_SUCCESS, data:data }
}

// export const api_get_one_success = (data) => {
//     return{ type: API_GET_ONE_SUCCESS, data:data }
// }

export const api_delete_success = (id) => {
    return{ type: API_DELETE_SUCCESS, id:id }
}

export const api_post_success = (data) => {
    return{ type: API_POST_SUCCESS, data:data }
}

// export const api_put_success = (data) => {
//     return{ type: API_PUT_SUCCESS, data:data }
// }

export const api_pending = () => {
    return{ type: API_PENDING }
}
 

export const api_error = (error) => {
    return{ type: API_ERROR, error: error }
}


