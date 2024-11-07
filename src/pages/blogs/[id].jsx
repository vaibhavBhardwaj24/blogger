import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import path from "path";
export const getStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "./src/pages/data.json"); // Adjust this path if needed
  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);
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
  const filePath = path.join(process.cwd(), "./src/pages/data.json");
  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);
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
