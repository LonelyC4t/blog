import style from './article.module.scss';
const Tag = ({ tag }) => {
  if (!Array.isArray(tag)) {
    return null;
  }
  let tags = tag.map((el, ids) => {
    return (
      <span title={el} key={ids}>
        {el}
      </span>
    );
  });
  return <div className={style.article__tag}>{tags}</div>;
};
export default Tag;
