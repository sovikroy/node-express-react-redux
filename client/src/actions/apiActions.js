import { callApiService } from './../services/apiService';

export const callApi = (dispatch) => {
    return dispatch => {
        callApiService()
            .then(res => dispatch(callApiAction(res.express)))
            .catch(err => console.log(err));;
    }
}

const callApiAction = (response) => {
    return {
        type: 'LOAD_API',
        payload: response
    }
}