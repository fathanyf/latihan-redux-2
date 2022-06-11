import { GET_RESULT, GET_RESULT_BOARD } from "../../actions/PostResultAction" 

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
            case GET_RESULT_BOARD:
                return {
                    ...state,
                    getResultBoardResult: action.payload.data,
                    getResultBoardLoading: action.payload.loading,
                    getResultBoardError: action.payload.errorMessage
                    }
            default:
                return state
            }
}

export default resultReducer