"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/Api/baseApi";
import { Blog } from "@/types";

const AllBlogs = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl my-4">All Blogs</h2>
      <p className="w-[70%] mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dolor
        iste doloremque obcaecati, repudiandae voluptates architecto nisi illum
        facilis cumque quam odit reprehenderit rem maiores at! Quam maxime
        suscipit unde.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
