import { useDispatch } from 'react-redux';

import { api } from '../api/api';
const getArticle = async () => {
  let request = await api.getArticle();
  let responce = await request.json();
  return responce;
};
const data = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      let articles = await getArticle();
      dispatch({ type: 'load', payload: articles });
    } catch (err) {
      console.log(err);
    }
  };
  return getData;
};
export default data;
