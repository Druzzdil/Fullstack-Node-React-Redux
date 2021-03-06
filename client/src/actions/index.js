import axios from 'axios'
import {FETCH_USER} from './types'


const fetchUser = () => {
    return dispatch => {
        axios
            .get('api/user')
            .then(res => dispatch({type: FETCH_USER, payload: res}))
    }
}