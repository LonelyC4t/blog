import { api } from '../../api/api';

const getPost = async (slug) => {
  let responce = await api.getSlugArticle(slug);
  let request = await responce.json();
  return request;
};
export default getPost;
