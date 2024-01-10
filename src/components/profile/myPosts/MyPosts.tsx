import s from './MyPosts.module.css';
import { Post } from './post/Post';

export const MyPosts = () => {
  return (
    <div>
      My posps
      <div>New post</div>
      <Post />
      <Post />
    </div>
  );
}