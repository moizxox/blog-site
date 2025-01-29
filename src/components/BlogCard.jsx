import { useNavigate } from "react-router-dom";
import Button from "./Button";
const BlogCard = ({ title, expert, image, id }) => {
  const navigate = useNavigate();
  let BlogURI = encodeURIComponent(title);
  BlogURI = BlogURI.toLowerCase()
    .replace(/%20/g, "-")
    .replace(/[^a-z0-9-]+/g, "");

  return (
    <section className="w-full rounded bg-primary p-6 text-primaryLight flex flex-col gap-4 items-start max-md:max-w-[550px]">
      <img src={image} className="w-full rounded object-cover aspect-[5/3]" />
      <h4 className="uppercase font-semibold text-xl">{title}</h4>
      <p>{expert}</p>
      <Button
        text="Read More >"
        radius="rounded"
        bg="bg-accent text-primaryLight hover:bg-primaryLight hover:text-primary"
        onClick={() => navigate(`/single-blog/${BlogURI}`, { state: { id } })}
      />
    </section>
  );
};
export default BlogCard;
