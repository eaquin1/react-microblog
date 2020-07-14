import {
    FETCH_POST,
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
  } from "../actions/types";
  

const INITIAL_STATE = { "posts" : [] }

export default function rootReducer(state=INITIAL_STATE, action) {
    let post = state[action.postId]
    switch(action.type){
        case FETCH_POST: 
            return {...state, [action.post.id]: action.post };

        case ADD_POST:
            return {...state, [action.post.id]: { ...action.post, comments: []}}

        case UPDATE_POST:
            return {...state, [action.post.id]: {
                ...action.post,
                comments: state[action.post.id].comments
            }
        }
        
        case REMOVE_POST:
            let posts = { ...state }
            delete posts[action.postId];
            return posts;

        case ADD_COMMENT:
            return {
                ...state, 
                [action.postId]: {
                    ...post, comments: [...post.comments, action.comment]
                }
            }
        case REMOVE_COMMENT:
            return {...state,
            [action.postId]: {
                ...post, comments: post.comments.filter(c => c.id !== action.commentId)
            }
        }

        default:
        return state
    }
}