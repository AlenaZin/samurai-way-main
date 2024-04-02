import React from "react";
import { action } from '@storybook/addon-actions';
import { Post } from "../components/profile/myPosts/post/Post";

export default {
  title: 'Post Form Component', 
  component: Post,
};

const callback = action('Button "add" was pressed inside the form')

export const PostBaseExampe = () => {
  return (
    <Post post={{
      id: 10,
      title: "My new post",
      likeCount: 15
    }} />
  )
}

