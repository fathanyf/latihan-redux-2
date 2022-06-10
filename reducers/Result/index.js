import { GET_RESULT } from "../../actions/PostResultAction" 

// create reducer for game list component

const initialState = {
    getResultResult: false,
    getResultLoading: false,
    getResultError: false,
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESULT:
            return {
                ...state,
                getResultResult: action.payload.data,
                getResultLoading: action.payload.loading,
                getResultError: action.payload.errorMessage
            }
            default:
                return state
            }
}

export default resultReducer