export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

import axios from 'axios'
const rooturl = 'http://reduxblog.herokuapp.com/api/'
const apikey = '?key=HUUH&*T*&GGIYGYG*&G*(9bkb)'

export function fetchPosts() {
  const request = axios.get( `${rooturl}/posts${apikey}` );

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost( values, callback ) {
  const request = axios
    .post( `${rooturl}/posts${apikey}`, values )
    .then( () => callback() );

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost( id ) {
  const request = axios.get( `${rooturl}/posts/${id}${apikey}` );

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost( id, callback ) {
  const request = axios
    .delete( `${rooturl}/posts/${id}${apikey}` )
    .then( () => callback() );

  return {
    type: DELETE_POST,
    payload: id
  };
}