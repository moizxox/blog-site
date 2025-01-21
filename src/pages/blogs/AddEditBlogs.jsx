import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FileInput from "../../components/blogs/FileInput";

const AddEditBlogs = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    console.log({
      content,
      image,
      excerpt,
      author,
    });
  };

  return (
    <section className="max-w-[1280px] py-[20px] mx-auto flex flex-col gap-6">
      <h1 className="font-pacifico text-3xl leading-relaxed text-accent">
        Add Blog
      </h1>
      <div className="p-6 bg-gray-100 rounded-md shadow-md space-y-6">
        <div>
          <label
            htmlFor="content"
            className="block text-lg font-semibold mb-2 text-gray-700"
          >
            Add your content:
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            className="rounded-md h-[300px] mb-[60px]"
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <FileInput />
          <div>
            <label
              htmlFor="author"
              className="block text-lg font-semibold mb-2 text-gray-700"
            >
              Select Author:
            </label>
            <select
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
            >
              <option value="">Select an author</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Alex Johnson">Alex Johnson</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="excerpt"
            className="block text-lg font-semibold mb-2 text-gray-700"
          >
            Excerpt:
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Write a short excerpt (max 150 characters)"
            maxLength="150"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full px-4 py-2 bg-accent text-white rounded-md hover:bg-primary transition-all duration-300"
        >
          Save Blog
        </button>
      </div>
    </section>
  );
};

export default AddEditBlogs;
