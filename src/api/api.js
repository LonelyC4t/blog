import React from 'react';
class Api extends React.Component {
  base = 'https://blog.kata.academy/api/';
  getArticle() {
    return fetch(`${this.base}articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
}
let api = new Api();
export { api };
