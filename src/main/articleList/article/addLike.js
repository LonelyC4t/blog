import { api } from '../../../api/api';
import data from '../../../data/data';
import getPost from '../getPost';

const addLike = async (slug, dispatch, page, favorited, setArticle) => {
  if (page === undefined) {
    if (!favorited) {
      try {
        await api.addFavorite(slug);
        const post = await getPost(slug);
        setArticle(post);
      } catch (err) {
        console.error(err);
      }
    }
    if (favorited) {
      try {
        await api.unFavorite(slug);
        const post = await getPost(slug);
        setArticle(post);
      } catch (err) {
        console.error(err);
      }
    }
  }
  if (page !== undefined) {
    if (page === 1) page = 0;
    if (!favorited) {
      try {
        await api.addFavorite(slug);
        data(dispatch, page);
      } catch (err) {
        console.error(err);
      }
    }
    if (favorited) {
      try {
        await api.unFavorite(slug);
        data(dispatch, page);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
export default addLike;
