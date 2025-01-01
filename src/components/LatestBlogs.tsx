import { Blog } from "@/types";
import LatestBlogCard from "./ui/LatestBlogCard";
import BlogCard from "./ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl my-4">Latest Blogs</h2>
      <p className="w-[70%] mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dolor
        iste doloremque obcaecati, repudiandae voluptates architecto nisi illum
        facilis cumque quam odit reprehenderit rem maiores at! Quam maxime
        suscipit unde.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
