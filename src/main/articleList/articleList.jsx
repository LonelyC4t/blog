import { useSelector } from 'react-redux';

import Article from './article/article';
const ArticleList = () => {
  let { articles } = useSelector((state) => state.articles);
  //console.log(articles);
  let article =
    articles &&
    articles.map((el) => {
      return <Article key={el.slug} info={el} />;
    });
  return article;
};
export default ArticleList;
