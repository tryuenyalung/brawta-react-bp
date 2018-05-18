export const INCREMENT = 'INCREMENT'
export const DO_SOMETHING = 'DO_SOMETHING'



// action async container
export const first = () => {
    return (dispatch) => {

        dispatch(second())

        dispatch(increment())
    }
}

// action creators retutrn an object that triggers dispatch on reducers 
export const increment = () => {
    return{
        type: INCREMENT
    }
}

export const second = () => {
    return{
        type: 'SECOND'
    }
}


