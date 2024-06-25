import { api } from '../../../api/api';

const controlData = async (e, data, navigate) => {
  if (e.target.textContent === 'Yes') {
    await api.deleteArticle(data);
    navigate('/');
  }
  if (e.target.textContent === 'Edit') {
    navigate(`/articles/${data}/edit`);
  }
};
export default controlData;
