export const GET_GAMES = 'GET_GAMES'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

// create action for game list component

export const get_games = () => {
    return (dispatch) => {
        dispatch({
            type: GET_GAMES,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        const dbRef = collection(db, 'games')
        getDocs(dbRef)
            .then((snapshot) => {
                let games = []
                snapshot.docs.forEach((doc) => {
                    games.push({ ...doc.data(), id: doc.id })
                })
                dispatch({
                    type: GET_GAMES,
                    payload: {
                        loading: false,
                        data: games,
                        errorMessage: false,
                    }
                })
            })
            .catch((error) => {
                console.log('gagal konek');
                dispatch({
                    type: GET_GAMES,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })


    }
}