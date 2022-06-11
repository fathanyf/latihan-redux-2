export const GET_RESULT = 'GET_RESULT'
export const GET_RESULT_BOARD = 'GET_RESULT_BOARD'
import { db } from '../config/firebase'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'

// create action for result

export const getResult = () => {
    console.log("masuk result");
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