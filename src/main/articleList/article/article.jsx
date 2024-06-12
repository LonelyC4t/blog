import Markdown from 'react-markdown';

import heart from '../../../image/heart.svg';
//import user from '../../../image/user.svg';

import style from './article.module.scss';
import Tag from './tag';
import { formatDate } from './formDate';

const Article = ({ info }) => {
  //console.log(new Date('2024-06-11T08:25:03.561Z').getMonth());
  console.log(info);
  return (
    <article className={style.article}>
      <div className="article__wrapper">
        <div className={style.article__header}>
          <div>
            <div className={style.article__header_left}>
              <p>{info.title}</p>
              <img src={heart} alt="like" />
              <span>{info.favoritesCount}</span>
            </div>
            <Tag tag={info.tagList} />
          </div>
          <div className={style.article__header_right}>
            <div className={style.article__user}>
              <p>{info.author.username}</p>
              <p>{formatDate(info.createdAt)}</p>
            </div>
            <img className={style.article__image} src={info.author.image} alt="user" />
          </div>
        </div>
        <Markdown className={style.article__text}>{info.body}</Markdown>
      </div>
    </article>
  );
};
export default Article;
