
import { PostDataType } from '../../redux/state';
import s from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';

type ProfileProps = { posts: PostDataType[] };

export const Profile = ({ posts }: ProfileProps) => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
}