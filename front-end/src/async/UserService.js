import $api from "."
import { removeUser, setUser } from "../store/userReducer"

export const login = (loginRequest) => {
    return dispatch => {
        $api.post('accounts/login', loginRequest)
            .then(res => {
                localStorage.setItem('accessToken', res.data.AccessToken)
                dispatch(setUser(res.data))
            })
            .catch(errors => console.log(errors))
    }
}
export const refresh = () => {
    return dispatch => {
        $api.post('accounts/refresh')
            .then(res => {
                localStorage.removeItem('accessToken')
                dispatch(removeUser())
            })
    }
}