import Markdown from 'react-markdown';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import heart from '../../../image/heart.svg';
import redHeart from '../../../image/redHeart.svg';
import getPost from '../getPost';

import controlData from './controlData';
import style from './article.module.scss';
import Tag from './tag';
import { formatDate } from './formDate';
import disabled from './disabled';
import addLike from './addLike';
import Modal from './modal';

const OpenArticle = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.username);
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(location.state?.post);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (!article) {
      const getData = async () => {
        const post = await getPost(id);
        setArticle(post);
      };
      getData();
    }
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (e) => {
    controlData(e, article.article.slug, navigate);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article>
      <div className={style.openArticle__wrapper}>
        <div className={style.article__header}>
          <div>
            <div className={style.article__header_left}>
              <p>{article && article.article.title}</p>
              <button
                disabled={disabled()}
                onClick={() =>
                  addLike(article.article.slug, undefined, undefined, article.article.favorited, setArticle)
                }
              >
                <img src={article.article.favorited ? redHeart : heart} alt="like" />
              </button>
              <span>{article && article.article.favoritesCount}</span>
            </div>
            <Tag tag={article && article.article.tagList} />
          </div>
          <div className={style.article__header_right}>
            <div className={style.article__user}>
              <p>{article && article.article.author.username}</p>
              <p>{formatDate(article && article.article.createdAt)}</p>
              {user === article.article.author.username ? (
                <div className={style.article__control}>
                  <button onClick={handleDelete}>Delete</button>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
                  <button onClick={(e) => controlData(e, article.article.slug, navigate)}>Edit</button>
                </div>
              ) : null}
            </div>
            <img className={style.article__image} src={article && article.article.author.image} alt="user" />
          </div>
        </div>
        <p className={style.article__text}>{article && article.article.description}</p>
        <Markdown className={style.article__body}>{article && article.article.body}</Markdown>
      </div>
    </article>
  );
};
export default OpenArticle;
