import axios from 'axios';
import { normalizePosts } from '../utils/normalizers';

const api = "http://localhost:8080";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  "Accept": "application/json",
  "Authorization": token
};

export const getCategories = () =>
  axios.get(`${api}/categories`, { headers })
    .then(res => res.data.categories);

export const getPostsByCategory = (category) => axios.get(`${api}/${category}/posts`, { headers });

export const getPosts = () =>
  axios.get(`${api}/posts`, { headers })
    .then(res => normalizePosts(res.data));

export const newPost = post =>
  axios.post(`${api}/posts`, post, { headers })
    .then(res => res.data);

export const getPostDetail = id =>
  axios.get(`${api}/posts/${id}`, { headers })
    .then(res => res.data);

export const voteOnPost = (id, option) =>
  axios.post(`${api}/post/${id}`, option, { headers })
    .then(res => res.data);

export const editPost = (id, post) =>
  axios.put(`${api}/post/${id}`, post, { headers })
    .then(res => res.data);

export const deletePost = id =>
  axios.delete(`${api}/post/${id}`, { headers })
    .then(res => res.data);

export const getPostComments = id =>
  axios.get(`${api}/post/${id}/comments`, { headers })
    .then(res => res.data);

export const newComment = comment =>
  axios.post(`${api}/comments`, comment, { headers })
    .then(res => res.data);

export const getCommentDetails = id =>
  axios.get(`${api}/comments/${id}`, { headers })
    .then(res => res.data);

export const voteOnComment = (id, option) =>
  axios.post(`${api}/comments/${id}`, option, { headers })
    .then(res => res.data);

export const editComment = (id, comment) =>
  axios.put(`${api}/comments/${id}`, comment, { headers })
    .then(res => res.data);

export const deleteComment = id =>
  axios.delete(`${api}/comments/${id}`, { headers })
    .then(res => res.data);

export const getInitialData = () =>
  Promise.all([
    getCategories(),
    getPosts()
  ]).then(([categories, posts]) =>
    ({ categories, posts }));