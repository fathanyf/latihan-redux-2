export const GET_GAMES = 'GET_GAMES'
export const GET_RESULT_BOARD = 'GET_RESULT_BOARD'
export const GET_RESULT = 'GET_RESULT'
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

export const getResult = () => {
    console.log("1. masuk result");
  return (dispatch) => {

      //loading
      dispatch({
          type: GET_RESULT,
          payload: {
              loading: true,
              data: false,
              errorMessage: false
          }
      })

      const dbRef = collection(db, 'result')
        getDocs(dbRef)
            .then((snapshot) => {
                console.log("2. dapat result");
                let result = []
                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id })
                })
                dispatch({
                    type: GET_RESULT,
                    payload: {
                        loading: false,
                        data: result,
                        errorMessage: false,
                    }
                })
            })
            .catch((error) => {
                console.log("3. gagal dapat data : ");
                dispatch({
                    type: GET_RESULT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })

  }
}

export const get_result_board = () => {
    return (dispatch) => {
        dispatchLoading(dispatch, GET_RESULT_BOARD)
        const q = query(collection(db, 'gamestats'), orderBy("createAt", "desc"),limit(5))
        getDocs(q)
            .then((snapshot) => {
                let result = []
                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id})
                })
                dispatchSuccess(dispatch, GET_RESULT_BOARD, result)
                console.log(result);
                
            })
            .catch((error) => {
                dispatchError(dispatch, GET_RESULT_BOARD, error)
            })
    }
}

// export const get_games_board = () => {
//     return (dispatch) => {
//         dispatchLoading(dispatch, GET_GAME_BOARD)
//         const q = query(collection(db, 'gamestats'), orderBy("createAt", "desc"),limit(5))
//         getDocs(q)
//             .then((snapshot) => {
//                 let result = []
//                 snapshot.docs.forEach((doc) => {
//                     result.push({ ...doc.data(), id: doc.id})
//                 })
//                 dispatchSuccess(dispatch, GET_GAME_BOARD, result)
//                 console.log(result);
                
//             })
//             .catch((error) => {
//                 dispatchError(dispatch, GET_GAME_BOARD, error)
//             })
//     }
// }