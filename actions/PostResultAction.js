export const GET_RESULT = 'GET_RESULT'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

// create action for result

export const getResult = () => {
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