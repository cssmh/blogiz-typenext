import LatestBlogs from "@/components/LatestBlogs";
import Banner from "@/components/shared/Banner";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <>
      <Banner />
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
