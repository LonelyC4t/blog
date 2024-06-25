import Markdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';

import heart from '../../../image/heart.svg';
import redHeart from '../../../image/redHeart.svg';

import style from './article.module.scss';
import Tag from './tag';
import { formatDate } from './formDate';
import addLike from './addLike';
import disabled from './disabled';

const Article = ({ info, openPost }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  return (
    <article className={style.article}>
      <div className="article__wrapper">
        <div className={style.article__header}>
          <div>
            <div className={style.article__header_left}>
              <p onClick={() => openPost(info.slug)}>{info.title}</p>
              <button
                disabled={disabled()}
                onClick={() => addLike(info.slug, dispatch, page, info.favorited, undefined)}
              >
                <img src={info.favorited ? redHeart : heart} alt="like" />
              </button>
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
