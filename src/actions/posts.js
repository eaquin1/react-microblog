import {
    FETCH_POST,
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from "./types"

export function getPost(post) {
    return {
        type: FETCH_POST,
        post
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
}

export function removePost(postId) {
    return {
        type: REMOVE_POST,
        postId
    }
}

export function addComment(postId, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        comment
    }
}

export function removeComment(postId, commentId) {
    return {
        type: REMOVE_COMMENT,
        postId,
        commentId
    }
}