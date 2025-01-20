import { useState } from "react";
import BlogCard from "../BlogCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-[1280px] py-[100px] mx-auto flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-[90%] md:max-w-[600px] border-y border-primary p-2 ">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium rounded w-full md:w-auto md:flex-1 ${
              activeTab === index ? "bg-primary text-white" : " text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full place-items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

const tabsData = ["Tab 1", "Tab 2", "Tab 3"];

export default Tabs;
