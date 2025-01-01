import BlogDetails from "@/components/ui/BlogDetails";

interface Id {
  params: {
    id: string;
  };
}
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
