import { useSelector } from 'react-redux';

import Article from './article/article';
const ArticleList = ({ openPost }) => {
  let { articles } = useSelector((state) => state.articles);
  let article =
    articles &&
    articles.map((el) => {
      return <Article openPost={openPost} key={el.slug} info={el} />;
    });
  return article;
};
export default ArticleList;
