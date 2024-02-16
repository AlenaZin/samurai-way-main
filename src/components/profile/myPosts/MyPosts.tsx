import React from 'react';
import { PostDataType, StateType } from '../../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './post/Post';

type MyPostsProps = { posts: PostDataType[] }

export const MyPosts = ({ posts }: MyPostsProps) => {

  const postsElement = posts.map((post) => (
    <Post key={post.id} post={post} />
  ))

  const postRef = React.createRef<HTMLInputElement>()
  const addPost = () => {
    alert(postRef.current?.value)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <input ref={postRef}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}