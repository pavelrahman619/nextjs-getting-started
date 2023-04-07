import React from 'react';
import Blog from './blog';

type Post = {
  id: number;
  title: string;
};

const Index = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>My Blog</h1>
      <Blog posts={posts} />
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts = await res.json();

  const posts = allPosts.slice(0, 20)
  // By returning { props: { posts } }, the Index component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Index;