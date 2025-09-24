import React from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import { type PostsPageProps } from "@/interfaces";

 




const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <><Header />
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div></>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;

