import { GET_GAMES } from '../../actions/GamesAction'

// create reducer for game list component

const initialState = {
    getGamesResult: false,
    getGamesLoading: false,
    getGamesError: false,
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                getGamesResult: action.payload.data,
                getGamesLoading: action.payload.loading,
                getGamesError: action.payload.errorMessage
            }
            default:
                return state
            }
}

export default gamesReducer