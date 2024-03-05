import {addPostAC, changeNewTextAC } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxStore';

export const MyPostsContainer = () => {

  const profilePage = useAppSelector(state => state.profilePage);
  const dispatch = useAppDispatch();

  const addPostCallback = () => {
      dispatch(addPostAC())
  }
  const changeNewTextCallback = (text: string) => {
    dispatch(changeNewTextAC(text))
  };
  return (
    <MyPosts changeNewTextCallback={changeNewTextCallback} addPostCallback={addPostCallback} posts={profilePage.postData} text={profilePage.messageForNewPost}/>
  );
}