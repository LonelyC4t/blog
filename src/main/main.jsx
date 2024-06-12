import { Pagination } from 'antd';

import style from './main.module.css';
import ArticleList from './articleList/articleList';

const Main = () => {
  return (
    <main className="main">
      <div className={style.main__wrapper}>
        <ArticleList />
        <Pagination />
      </div>
    </main>
  );
};
export default Main;
