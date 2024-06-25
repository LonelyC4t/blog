import { api } from '../api/api';
const getArticle = async (offset) => {
  let request = await api.getArticle(offset);
  let responce = await request.json();
  return responce;
};
const data = async (dispatch, offset) => {
  dispatch({ type: 'spin', payload: true });
  try {
    let articles = await getArticle(offset);
    dispatch({ type: 'load', payload: articles });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ type: 'spin', payload: false });
  }
};
export default data;
