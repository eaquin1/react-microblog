import axios from "axios";

import {
    FETCH_POST,
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from "./types"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function getPostFromApi(id) {
    return async function(dispatch) {
        console.log(id)
        const response = await axios.get(`${API_URL}/${id}`);
        return dispatch(getPost(response.data))
    }
}

function getPost(post) {
    return {
        type: FETCH_POST,
        post
    }
}

export function sendPostToApi(title, description, body) {
    return async function(dispatch) {
        const response = await axios.post(`${API_URL}`, {
            title,
            description,
            body
        });
        return dispatch(addPost(response.data))
    }
}

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}
export function updatePostInApi(id, title, description, body) {
    return async function(dispatch){
        console.log(id)
        console.log(title)
        const response = await axios.put(`${API_URL}/${id}`, {
            title,
            description,
            body
        });
        return dispatch(updatePost(response.data))
    }
}

function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
}

export function removePostFromApi(id) {
    return async function(dispatch) {
        await axios.delete(`${API_URL}/${id}`);
        return dispatch(removePost(id))

    }
}

function removePost(postId) {
    return {
        type: REMOVE_POST,
        postId
    }
}

export function sendCommentToApi(postId, text) {
    return async function(dispatch) {
        const result = await axios.post(`${API_URL}/${postId}/comments`, {text});
        return dispatch(addComment(postId, result.data))
    }
}

function addComment(postId, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        comment
    }
}

export function removeCommentFromApi(postId, commentId) {
    return async function (dispatch) {
      await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
      return dispatch(removeComment(postId, commentId));
    };
  }

function removeComment(postId, commentId) {
    return {
        type: REMOVE_COMMENT,
        postId,
        commentId
    }
}