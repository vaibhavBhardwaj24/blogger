"use client";
import { useRouter } from "next/router";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const Blog = ({ data }) => {
  const router = useRouter();
  return (
    <div className="p-4">
      <h1 className="text-6xl text-white underline p-4"> Latest Blog</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((post) => (
          <li
            onClick={() => {
              router.push(`/blogs/${post.id}`);
            }}
            key={post.id}
            className="p-4 border-[1px] border-white/50 rounded-xl hover:-translate-y-2 duration-200 cursor-pointer"
          >
            <h2 className="md:text-3xl text-2xl">{post.title}</h2>
            <p className="text-white/45 md:text-base text-xs ">
              {post.excerpt}
            </p>
            <p className="text-sm">Posted on {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
