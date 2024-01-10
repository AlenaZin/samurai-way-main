import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://kartin.papik.pro/uploads/posts/2023-06/1687110851_kartin-papik-pro-p-kartinki-s-kolibri-i-tsvetami-krasivie-61.jpg" />
      </div>

      <div>ava + discription</div>

      <MyPosts />
    </div>
  );
}