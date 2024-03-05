import React, { ChangeEvent } from 'react';
import { PostDataType} from '../../../redux/store';
import s from './MyPosts.module.css';
import { Post } from './post/Post';

type MyPostsProps = { 
  posts: PostDataType[]
  text: string
  changeNewTextCallback: (text: string)=>void
  addPostCallback: ()=> void
}



export const MyPosts = ({ posts, text, changeNewTextCallback, addPostCallback }: MyPostsProps) => {

  const postsElement = posts.map((post) => (
    <Post key={post.id} post={post} />
  ))


  const addPost = () => {   
      addPostCallback();    
      changeNewTextCallback('');
  }

  const changeNewTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeNewTextCallback(e.currentTarget.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input value={text} onChange={changeNewTextHandler}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}