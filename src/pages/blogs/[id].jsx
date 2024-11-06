import { useRouter } from "next/router";
import React from "react";
export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const specific = data.find((item) => item.id.toString() === params.id);
  if (specific) {
    return {
      props: { specific },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
const Id = ({ specific }) => {
  const router = useRouter();
  return (
    <div className="text-white p-4">
      <button
        className="text-4xl cursor-pointer hover:-translate-x-2 duration-200"
        onClick={() => {
          router.back();
        }}
      >
        ⬅️
      </button>
      <h1 className=" md:text-5xl text-4xl font-bold underline">
        {specific.title}
      </h1>
      <p className="py-3">Posted on {specific.date}</p>
      <p className="text-2xl text-white/70">{specific.content}</p>
    </div>
  );
};

export default Id;
