import './login.js'

export function trigger_warp_animation() {
    return (dispatch, getState) => {
      (setTimeout(() => { 
        dispatch(terminate_warp_animation());
       }, 1500))
       dispatch(start_warp_animation());
    }
  }
  
  export function start_warp_animation() {
    return {type: "TRIGGER_WARP_ANIMATION"};
  }
  
  export function terminate_warp_animation() {
    return {type: "TERMINATE_WARP_ANIMATION"}
  }