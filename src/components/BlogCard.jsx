import React from "react";
import TestImg from "../assets/images/test-image.jpg";
import Button from "./Button";
const BlogCard = () => {
  return (
    <section className="w-full rounded bg-primary p-6 text-primaryLight flex flex-col gap-4 items-start max-md:max-w-[550px]">
      <img src={TestImg} className="w-full rounded object-cover aspect-[5/3]" />
      <h4 className="uppercase font-semibold text-xl">Hello World!</h4>
      <p>
        Lets discover the best thing with us to achieve a lot in our life and
        make some thing uniqur to help people around us 😉.
      </p>
      <Button
        text="Read More >"
        radius="rounded"
        bg="bg-accent text-primaryLight hover:bg-primaryLight hover:text-primary"
      />
    </section>
  );
};
export default BlogCard;
