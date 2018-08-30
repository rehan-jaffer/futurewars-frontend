import { current_sector, get_player_info } from './api.js';
import './animation.js';
import { UserConstants } from './constants';
import { UserService } from '../components/UserService.js';

export function toggle_visibility(screen) {
     return {type: "TOGGLE_SCREEN_VISIBILITY", payload: {screen: screen}};
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }))
    UserService.login(username, password)
      .then(
          user => { 
              dispatch(success(user));
              dispatch(get_player_info())
              dispatch(current_sector());
  //            history.push('/');
          },
          error => {
              dispatch(failure(error));
          }
    );  

    function request(user) { return { type: UserConstants.LOGIN_REQUEST, payload: {user: user} } }
    function success(user) { return { type: UserConstants.LOGIN_SUCCESS, payload: {user: user} } }
    function failure(error) { return { type: UserConstants.LOGIN_FAILURE, payload: {error: error} } }

  }

}

  export function logout() {
    UserService.logout();
    return {type: UserConstants.LOGOUT_SUCCESS};
  }

  function user_logging_in(username, password) {
    return { 
      type: "USER_LOGGING_IN",
      payload: {
        username: username,
        password: password
      }
    }
  }

  export default {login, logout, toggle_visibility};