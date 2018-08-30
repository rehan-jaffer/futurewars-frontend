import { terminate_warp_animation, trigger_warp_animation } from './animation.js';

const API_URL = "http://localhost:21000/api";

const headers = (token) => {
    return new Headers({
     'Authorization': 'Basic ' + token, 
     'Content-Type': 'application/x-www-form-urlencoded'
    });
  };
  

export function fetch_with_auth(url, options, getState) {
  return fetch((API_URL + url), {...options, headers: headers(getState().auth_token)});
}

export function current_sector() {
  
    return (dispatch, getState) => {
      return fetch_with_auth("/nav/sector/current", {method: 'get'}, getState)
      .then((res) => res.json())
      .then((sector) => dispatch(sector_success(sector)))
    
      function sector_success(sector) { return { type: "SECTOR_SUCCESS", payload: {sector: sector } } }
     }

}

export function get_player_info() {
  return (dispatch, getState) => {
    return fetch_with_auth("/player/stats", {method: 'get'}, getState)
      .then((res) => res.json())
      .then((user) => dispatch(player_stats_success(user)))
    }
  function player_stats_success(user) { return { type: "PLAYER_STATS_SUCCESS", payload: {user: user} } }
}

export function express_warp_path(sector_id) {
  return (dispatch, getState) => {
    return fetch_with_auth("/nav/warp_path/" + sector_id, {method: 'get'}, getState)
      .then((res) => res.json())
      .then((path) => { 
        dispatch(express_warp_path_success(path))
      }
    );
  }
  function express_warp_path_success(path) { return { type: "EXPRESS_WARP_SUCCESS", payload: {path: path} } }
}

export function warp_error(errors) {
  return (dispatch, getState) => {
    (setTimeout(() => { 
      dispatch(terminate_warp_animation());
     }, 1500))
     dispatch(error_notification(errors));
     dispatch(warp_error_animation(errors));   
  }
  
}

export function warp_error_animation(errors) {
  return {type: "WARP_ERROR", payload: errors};   
}

export function error_notification(errors) {
  return {type: "ERROR_NOTIFICATION", payload: errors}
}

function error_check(res) {
  if (!res.errors)
    return res;
  throw res.errors;
}

export function warp_to(sector_id) {
  return (dispatch, getState) => {
    return fetch_with_auth("/player/move", {method: 'post', body: "id=" + sector_id }, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((res) => error_check(res))
      .then((sector) => {
          dispatch(current_sector(sector));
          dispatch(get_player_info());
          dispatch(trigger_warp_animation());
        })
        .catch((res)=> { dispatch(warp_error(res)) })
    }
  function sector_success(sector) { return { type: "SECTOR_SUCCESS", payload: {sector: sector } } }
}

export function query_port(port_id) {
  return (dispatch, getState) => {
    return fetch_with_auth(`/subspace/ports/query/${port_id}`, {method: 'get'}, getState)
      .then((res) => res)
      .then((res) => res.json())
      .then((res) => error_check(res))
      .then((port) => {
          dispatch(port_query_success(port))
          console.log(port);
        })
        .catch((res)=> { dispatch(error_notification(res)) })
    }
  function port_query_success(port) { return { type: "PORT_SUCCESS", payload: {port: port } } }
}