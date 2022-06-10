import {combineReducers} from 'redux'
import gamesReducer from './games'
import resultReducer from './Result'

export default combineReducers({
    gamesReducer, 
    resultReducer
})

