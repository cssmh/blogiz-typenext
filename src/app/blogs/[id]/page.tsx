import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface Id {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    id: blog.id,
  }));
};

const page = async ({ params }: Id) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.id}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default page;
