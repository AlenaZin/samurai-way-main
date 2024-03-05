
import { ActionsType, PostDataType } from '../../redux/store';
import s from './Profile.module.css';
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { ProfileInfo } from './profileInfo/ProfileInfo';

// type ProfileProps = { 
//   posts: PostDataType[]
//   text: string
//   dispatch: (action: ActionsType)=>void
// };

export const Profile = () => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  );
}