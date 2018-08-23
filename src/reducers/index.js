import { combineReducers } from 'redux';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const initialState = {
  
};

const initialEngineState = {
  status: "idle"
};

const screensInitialState = {
  "move": false,
  "port": false,
  "trade": false
}

const engineReducer = (state = initialEngineState, action) => {
  switch(action.type) {
    case "TRIGGER_WARP_ANIMATION":
    return {status: "ACTIVE"};
    case "TERMINATE_WARP_ANIMATION":
      return {status: "IDLE"};
    default:
      return state;
  }
}

// const rootReducer = (state = initialState, action) => state;

const currentSectorReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SECTOR_SUCCESS":
      return action.payload.sector;
    default:
      return state;
  }
}

const screenVisibilityReducer = (state = screensInitialState, action) => {
  switch (action.type) {
    case "TOGGLE_SCREEN_VISIBILITY":
      return Object.assign(state, {[action.payload.screen]: !state[action.payload.screen]});
    default:
      return state;
  }
}

const ExpressPathReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXPRESS_PATH_SUCCESS":
      return action.payload.path;
    default:
      return state;
  }
}

const PlayerInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case "PLAYER_STATS_SUCCESS":
      return action.payload.user;
    default:
      return state;
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.user.auth_token;
    default:
      return state;
  }
};

const rootReducer = combineReducers({auth_token: authReducer, 
                                     current_sector: currentSectorReducer, 
                                     user: PlayerInfoReducer, 
                                     path: ExpressPathReducer, 
                                     engine: engineReducer,
                                     screens: screenVisibilityReducer});

export default rootReducer;
