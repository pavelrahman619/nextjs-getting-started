import React from 'react';

type Post = {
  id: number;
  title: string;
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Blog;