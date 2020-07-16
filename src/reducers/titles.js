import {
    FETCH_TITLES,
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    VOTE
  } from "../actions/types";

function sortByVotes(posts) {
    return posts.sort((a,b) =>b.votes - a.votes)
}

function makeTitleFromPost({id, title, description, votes}) {
    return {id, title, description, votes}
}
  export default function rootReducer(state=[], action) {
      switch(action.type) {
          
        case FETCH_TITLES:
            return sortByVotes([...action.titles])

        case ADD_POST:
            return sortByVotes([...state, makeTitleFromPost(action.post)]);

        case REMOVE_POST:
            return state.filter(title => title.id !== action.postId);
            
        case UPDATE_POST:
            return state.map(title => title.id === action.post.id
                ? makeTitleFromPost(action.post) 
                : title );

        case VOTE:
            return sortByVotes(state.map(
                title => title.id === action.postId ? {...title, 
                votes: action.votes} : title
            ))


      default:
          return state
      }
  }