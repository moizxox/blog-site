import { useLocation } from "react-router-dom";
import TestImg from "../../assets/images/test-image.jpg";
import { useContext } from "react";
import { BlogContext } from "../../store/BlogContext";

const SingleBlog = () => {
  const location = useLocation();
  const blogID = location.state?.id;
  const blogsData = useContext(BlogContext);
  const currentBlog = blogsData.blogs.find((blog) => blog.id === blogID);
  console.log(currentBlog);
  return (
    <>
      <section
        className="w-full max-w-[1280px] mx-auto bg-accent rounded p-6 text-primaryLight bg-cover bg-center relative"
        style={{ backgroundImage: `url(${currentBlog.img})` }}
      >
        <div className="relative flex flex-col gap-4 z-10">
          <h1 className="font-pacifico text-3xl leading-relaxed ">
            {currentBlog.title}
          </h1>
          <p>{currentBlog.expert}</p>
          <img
            src={currentBlog.img}
            className="w-[60%] rounded h-[300px] object-cover"
            alt="Blog visual"
          />
        </div>

        <span className="absolute inset-0 bg-[#212a31e0] z-0"></span>
      </section>

      <section
        className="max-w-[1280px] py-[60px] mx-auto flex flex-col items-start gap-6"
        dangerouslySetInnerHTML={{ __html: currentBlog.content }}
      ></section>
    </>
  );
};

export default SingleBlog;
