
import titles from "./titles"
import posts from "./posts"
import {combineReducers} from "redux"

export default combineReducers({
    titles,
    posts
})



// import {
//     FETCH_POST,
//     REMOVE_POST,
//     ADD_POST,
//     UPDATE_POST,
//     ADD_COMMENT,
//     REMOVE_COMMENT
//   } from "../actions/types";
  

// const INITIAL_STATE = {posts: []}

// export default function rootReducer(state=INITIAL_STATE, action) {
//     let post = state[action.postId]
//     switch(action.type){
//         case FETCH_POST: 
//             return {...state, posts: [...state.posts, {...action.post}] };

//         case ADD_POST:
//             return {...state, posts: [...state.posts, { ...action.post, comments: []}]}

//         case UPDATE_POST:
          
//             let matchingId = (id) => id.id === action.post.id 
            
//             const copy = [...state.posts]
    
//             const postToUpdateIdx = state.posts.findIndex(matchingId)
//             copy.splice(postToUpdateIdx, 1, action.post)
//             return {...state, posts: [...copy]}
            
        
//         case REMOVE_POST:
//             let removeId = (id) => id.id === action.postId
//             let posts = [...state.posts]
//             let deletedPostIdx = posts.findIndex(removeId)
//             posts.splice(deletedPostIdx, 1)
//             return {...state, posts: [...posts]}

//         case ADD_COMMENT:
//             let addCommentPostId = (id) => id.id === action.postId
//             let addCommentIdx = state.posts.findIndex(addCommentPostId)
            
//             state.posts[addCommentIdx] = {...state.posts[addCommentIdx], comments: [...state.posts[addCommentIdx].comments, action.comment]}
//             return state;

//         case REMOVE_COMMENT:
//             let removeCommentPostId = (id) => id.id === action.postId
//             let removeCommentIdx = state.posts.findIndex(removeCommentPostId);
//             state.posts[removeCommentIdx] = {...state.posts[removeCommentIdx], comments: [state.posts[removeCommentIdx].comments.filter(c =>c.id !== action.id)]}
//             return state;
        

//         default:
//         return state
//     }
// }