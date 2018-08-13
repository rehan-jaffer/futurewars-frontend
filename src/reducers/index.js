import { combineReducers } from 'redux';

const initialState = {

};

// const rootReducer = (state = initialState, action) => state;

const currentSectorReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SECTOR_SUCCESS":
      return action.payload.sector;
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

const rootReducer = combineReducers({auth_token: authReducer, current_sector: currentSectorReducer, user: PlayerInfoReducer});

export default rootReducer;