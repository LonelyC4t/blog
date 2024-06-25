import style from './article.module.scss';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <p>Are you sure to delete this article?</p>
        <div className={style.modalButton}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
