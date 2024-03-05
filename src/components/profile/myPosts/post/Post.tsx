import { PostDataType } from '../../../../redux/store';
import s from './Post.module.css';

type PostType = {post: PostDataType};

export const Post = ({post}: PostType) => {
  return (
    <div className={s.itemPost}>
      <div className={s.item}>
        <img src="https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-for-your-text-and-picture_1258-54283.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais" />
        <span className={s.postName}>{post.title}</span>
      </div>

      <div>
        <span>like: {post.likeCount}</span>
      </div>
    </div>
  );
}