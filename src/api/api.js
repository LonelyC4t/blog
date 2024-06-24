import React from 'react';
class Api extends React.Component {
  base = 'https://blog.kata.academy/api/';
  getArticle(offset) {
    return fetch(`${this.base}articles?offset=${offset}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
  getSlugArticle(slug) {
    return fetch(`${this.base}articles/${slug}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
  createProfile(value) {
    return fetch(`${this.base}users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  }
  logIn(value) {
    return fetch(`${this.base}users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  }
  getUser(token) {
    return fetch(`${this.base}user`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
  updateUser(value, token) {
    return fetch(`${this.base}user`, {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  }
  createArticle(value, token) {
    return fetch(`${this.base}articles`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  }
  deleteArticle(slug, token) {
    return fetch(`${this.base}articles/${slug}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
  updateArticle(slug, token, value) {
    return fetch(`${this.base}articles/${slug}`, {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(value),
    });
  }
}
let api = new Api();
export { api };
