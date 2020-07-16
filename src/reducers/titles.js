import {
    FETCH_TITLES,
    // REMOVE_POST,
    // ADD_POST,
    // UPDATE_POST,
    // ADD_COMMENT,
    // REMOVE_COMMENT
  } from "../actions/types";

//   function makeTitleFromPost({id, title, description}) {
//       return {id, title, description}
//   }
  export default function rootReducer(state=[], action) {
      switch(action.type) {
          case FETCH_TITLES:
              return action.titles
      

      default:
          return state
      }
  }