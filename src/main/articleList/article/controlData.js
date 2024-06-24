import { api } from '../../../api/api';

const controlData = async (e, data, navigate) => {
  if (e.target.textContent === 'Delete') {
    let token = localStorage.getItem('token');
    await api.deleteArticle(data, token);
    navigate('/');
  }
  if (e.target.textContent === 'Edit') {
    navigate(`/articles/${data}/edit`);
  }
};
export default controlData;
