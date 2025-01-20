import Button from "../Button";
import BannerGif from "../../assets/gifs/banner-img.gif";
const Hero = () => {
  return (
    <section className="max-w-[1280px] py-[60px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between md:gap-6 gap-2">
      <div className="flex items-start flex-col gap-4 lg:w-[40%]">
        <h1 className="font-pacifico text-6xl leading-relaxed text-accent">
          Bloggy
        </h1>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <Button
          weight="font-normal font-pacifico"
          radius="rounded"
          text="Let's Begin"
          width="w-auto"
          textSize="text-xl"
        />
      </div>
      <img
        src={BannerGif}
        className="lg:w-[50%] w-full md:max-w-[420px] max-w-[300px]"
      />
    </section>
  );
};

export default Hero;
