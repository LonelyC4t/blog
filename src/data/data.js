import { api } from '../api/api';
const getArticle = async (offset) => {
  let request = await api.getArticle(offset);
  let responce = await request.json();
  return responce;
};
const data = async (dispatch, offset) => {
  try {
    let articles = await getArticle(offset);
    dispatch({ type: 'load', payload: articles });
  } catch (err) {
    console.log(err);
  }
};
export default data;
