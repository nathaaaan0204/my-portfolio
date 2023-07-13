import { Button } from "@material-tailwind/react";
import {
    CloudArrowUpIcon,
    ArrowLongRightIcon,
    ArrowPathIcon,
    BookmarkIcon,
  } from "@heroicons/react/24/outline";

export const Home = () => {
  return (
      <section className="flex bg-white w-full text-center md:text-left">
        <div className="lg:px-[200px] md:px-[100px] px-[16px] w-full h-screen flex flex-col items-left gap-12 justify-center">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-7xl md:text-9xl uppercase font-black text-black">
              Nathan <br />
              <span className="text-6xl md:text-8xl bg-black text-white py-3 px-7 rounded-3xl">
                Astorga
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl text-black font-black">
              Web Designer 🤪
            </h2>
          </div>
          <p className="max-w-lg leading-relaxed text-black font-medium text-sm md:text-base">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences.
          </p>
          <Button variant="text" className="flex md:w-max font-medium text-base normal-case text-black items-center gap-10 p-0 justify-center">
        Read more about me <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
      </Button>
        </div>
        <div
          className="2xl:w-full w-0 sm:bg-white"
          style={{
            background:
              "linear-gradient(180deg, #292830 0%, #31303A 47.42%, #121117 100%)",
          }}
        >
          <div className="">
            <img
              className="pt-[100px] object-cover h-screen"
              src="public/me.jpg"
            ></img>
          </div>
        </div>
      </section>
  );
};
