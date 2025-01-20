import React from "react";
import BlogCard from "../../components/BlogCard";

const Blogs = () => {
  return (
    <section className="max-w-[1280px] py-[60px] mx-auto flex flex-col items-center gap-6">
      <h1 className="font-pacifico text-6xl leading-relaxed text-accent">
        All Blogs
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full place-items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blogs;
