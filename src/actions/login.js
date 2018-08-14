const headers = (token) => {
   return new Headers({
    'Authorization': 'Basic ' + token, 
    'Content-Type': 'application/x-www-form-urlencoded'
   });
};

const API_URL = "http://localhost:21000/api"

export function fetch_with_auth(url, options, getState) {
  return fetch((API_URL + url), {...options, headers: headers(getState().auth_token)});
}

export function current_sector() {
  
    return (dispatch, getState) => {
      return fetch_with_auth("/nav/sector/current", {method: 'get'}, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((sector) => dispatch(sector_success(sector)))
    
      function sector_success(sector) { return { type: "SECTOR_SUCCESS", payload: {sector: sector } } }
     }

}

export function get_player_info() {
  return (dispatch, getState) => {
    return fetch_with_auth("/player/stats", {method: 'get'}, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((user) => dispatch(player_stats_success(user)))
    }
  function player_stats_success(user) { return { type: "PLAYER_STATS_SUCCESS", payload: {user: user} } }
}

export function express_warp_path(sector_id) {
  return (dispatch, getState) => {
    return fetch_with_auth("/nav/warp_path/" + sector_id, {method: 'get'}, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((path) => { 
          dispatch(express_warp_path_success(path))
        console.log(path); 
      }
    );
  }
  function express_warp_path_success(path) { return { type: "EXPRESS_WARP_SUCCESS", payload: {path: path} } }
}

export function warp_to(sector_id) {
  return (dispatch, getState) => {
    console.log(sector_id);
    return fetch_with_auth("/player/move", {method: 'post', body: "id=" + sector_id }, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((sector) => {
          dispatch(current_sector(sector));
          dispatch(get_player_info());
        }
      )
    }
  function sector_success(sector) { return { type: "SECTOR_SUCCESS", payload: {sector: sector } } }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(user_logging_in(username, password));

    let f = new FormData();
    f.append("username", username);
    f.append("password", password);

    return fetch(`http://localhost:21000/api/sessions`, {
      method: 'POST', body: f})
      .then(res => res)
      .then((response) => response.json())
      .then((user) => { 
          dispatch(login_success(user));
          dispatch(get_player_info())
          dispatch(current_sector());
          });

  };

  function login_success(user) { return { type: "LOGIN_SUCCESS", payload: {user: user } } }

  function user_logging_in(username, password) {
    return { 
      type: "USER_LOGGING_IN",
      payload: {
        username: username,
        password: password
      }
    }
  }
};
