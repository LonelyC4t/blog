import style from './article.module.scss';
const Tag = ({ tag }) => {
  console.log(tag);
  let tags = tag.map((el, ids) => {
    console.log(el);
    return (
      <span title={el} key={ids}>
        {el}
      </span>
    );
  });
  return <div className={style.article__tag}>{tags}</div>;
};
export default Tag;
