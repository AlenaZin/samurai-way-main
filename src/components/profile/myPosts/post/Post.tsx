import s from './Post.module.css';

export const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://cdni-vm.servicecdn.ru/2022.09/original/1200_632d91bb82682c39bb7f4a16.jpg'/>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}