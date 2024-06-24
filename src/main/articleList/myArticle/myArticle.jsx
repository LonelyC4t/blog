/*eslint-disable*/
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import style from './myArticle.module.scss';
import sendData from './sendData';
import getPost from '../getPost';

const MyArticle = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  
  const [error, setError] = useState(null);
  const location = useLocation();
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });
  const onSubmit = (data) => {
    sendData(data, setError, navigate, id);
  };

  useEffect(() => {
    if(location.pathname.includes('edit')) {
      const getData = async() => {
        const data = await getPost(id);
        setValue('title', data.article.title);
        setValue('description', data.article.description);
        setValue('text', data.article.body);
        data.article.tagList.forEach(tag => {
          console.log();
          append({ value: tag });
        });
      };
      getData();
      
    };
  }, [location.pathname])
  
  return (
    <article>
      <div className={style.article__wrapper}>
        <h4>{location.pathname.includes('edit') ? 'Edit article' : 'Create new article'}</h4>
        {error && (
          <span className={style.error}>
            {`${error?.error?.name}
           ${error?.error?.status}
            ${error?.error?.message}`}
          </span>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Title
            <input
              placeholder="Title"
              {...register('title', {
                required: 'Обязательно к заполнению',
              })}
            />
            <span className={style.error}>{errors?.title && errors.title.message}</span>
          </label>
          <label>
            Short description
            <input
              
              placeholder="Short description"
              {...register('description', {
                required: 'Обязательно к заполнению',
              })}
            />
            <span className={style.error}>{errors?.description && errors.description.message}</span>
          </label>
          <label>
            Text
            <input
              className={style.article__text}
              placeholder="Text"
              {...register('text', {
                required: 'Обязательно к заполнению',
              })}
            />
            <span className={style.error}>{errors?.text && errors.text.message}</span>
          </label>
          <div className={style.article__tag}>
            <p>Tags</p>
            <label>
              <div className={style.tag__groupe}>
                {fields.map((field, index) => (
                  <label key={field.id}>
                    <input placeholder="Tag" {...register(`tags.${index}.value`)} />
                    <button type="button" className={style.article__tag_red} onClick={() => remove(index)}>
                      Delete
                    </button>
                  </label>
                ))}
                <button type="button" className={style.article__tag_blue} onClick={() => append({ value: '' })}>
                  Add Tag
                </button>
              </div>
            </label>
            <button  className={style.article__button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
export default MyArticle;
