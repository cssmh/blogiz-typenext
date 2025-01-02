import { Blog } from "@/types";

const BlogLoading = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();
  return (
    <div className="max-w-7xl mx-auto gap-6 grid grid-cols-1 md:grid-cols-3">
      {data.map((blog: Blog) => (
        <div key={blog.id} className="flex flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default BlogLoading;
