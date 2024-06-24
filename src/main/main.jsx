import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import data from '../data/data';

import style from './main.module.css';
import ArticleList from './articleList/articleList';
import getPost from './articleList/getPost';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlClick = async (slug) => {
    let post = await getPost(slug);
    navigate(`article/${post.article.slug}`, { state: { post } });
    return post;
  };
  useEffect(() => {
    data(dispatch, 0);
  }, [location.pathname]);
  let size = useSelector((state) => state.articles);
  const onChange = (page) => {
    data(dispatch, page * 10);
  };
  return (
    <main className="main">
      <div className={style.main__wrapper}>
        {location.pathname === '/article' ? <Outlet /> : <ArticleList openPost={handlClick} />}
        <Pagination
          onChange={onChange}
          showSizeChanger={false}
          total={Number.isFinite(size.articlesCount) ? Math.ceil(size.articlesCount / 20) * 10 : 0}
        />
      </div>
    </main>
  );
};
export default Main;
