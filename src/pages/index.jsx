import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-10">
      <h1 className="text-7xl underline font-bold py-2">Blogger</h1>
      <h2 className="text-white/50 ">
        {" "}
        - a Simple NextJs Project for Intership assingment
      </h2>
      <button
        onClick={() => {
          router.push("/blogs");
        }}
        className="text-3xl border-2 rounded-xl hover:bg-white hover:translate-x-2 hover:text-black p-2 m-2 duration-200"
      >
        Blogs 💬
      </button>
      <ul className="md:w-1/2 flex flex-col gap-3 text-white/50">
        <p className="text-3xl text-white"> A summary of Project</p>
        <li>
          <b className="text-white">
            Static Data Fetching with getStaticProps:
          </b>{" "}
          The getStaticProps function fetches data from a local JSON file
          (data.json) at build time.
        </li>
        <li>
          <b className="text-white">File System Access with Node.js Modules</b>:
          The fs (file system) and path modules from Node.js are used to locate
          and read the data.json file, allowing Next.js to access server-side
          file storage.
        </li>
        <li>
          <b className="text-white">Dynamic Routes with getStaticPaths:</b> In
          getStaticPaths, paths for all blog posts are generated dynamically
          based on the id of each item in data.json. This enables Next.js to
          pre-render individual pages for each blog post.
        </li>
        <li>
          <b className="text-white">Error Handling with notFound:</b> If a
          specific blog post (specific) does not exist for a given id, the
          notFound flag is returned, which directs Next.js to show a 404 page
        </li>
        <li>
          <b className="text-white">Router Navigation with useRouter:</b> The
          useRouter hook is used in both components (Blog and Id) to
          programmatically navigate. In Blog, it redirects to a specific blog
          post when a list item is clicked. In Id, it allows users to go back to
          the previous page
        </li>
        <li>
          <b className="text-white">Responsive Design with Tailwind CSS:</b> The
          components use Tailwind CSS classes for styling. For instance, the
          grid layout (grid grid-cols-2 md:grid-cols-4) adapts to different
          screen sizes, making the UI responsive.
        </li>
      </ul>
    </div>
  );
}
