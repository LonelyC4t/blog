import { api } from '../../../api/api';

const sendData = async (data, setError, navigate, id) => {
  if (id) {
    try {
      const tags = data.tags.map((tag) => tag.value).filter(Boolean);
      const articleData = {
        article: {
          title: data.title,
          description: data.description,
          body: data.text,
          tagList: tags,
        },
      };
      const request = await api.updateArticle(id, articleData);
      if (request.ok) {
        setError(null);
        navigate('/');
      }
      if (!request.ok) {
        const responce = await request.json();
        setError(responce.errors);
      }
    } catch (err) {
      setError(err);
    }
  }
  if (!id) {
    try {
      const tags = data.tags.map((tag) => tag.value).filter(Boolean);
      const articleData = {
        article: {
          title: data.title,
          description: data.description,
          body: data.text,
          tagList: tags,
        },
      };
      let request = await api.createArticle(articleData);
      if (request.ok) {
        setError(null);
        navigate('/');
      }
      if (!request.ok) {
        let responce = await request.json();
        setError(responce.errors);
      }
    } catch (err) {
      setError(err);
    }
  }
};
export default sendData;
