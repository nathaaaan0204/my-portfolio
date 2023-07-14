import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { LeftBgComponent } from "../components/SectionComponents/LeftBgComponent";

export const Home = () => {
  return (
    <div className="flex h-screen bg-[white]">
      <LeftBgComponent />
      <div className="lg:w-1/2 snap-x snap-mandatory  h-screen overflow-y-scroll">
        <div className="lg:px-[100px] 2xl:p-[200px] py-[200px] sm:px-[100px] px-[32px] flex flex-col gap-12 justify-center items-center ">
          <div className="gap-12 flex flex-col 2xl:items-start text-black">
       
          
            <div className="flex flex-col">
              <h1 className="2xl:text-9xl sm:text-6xl text-4xl uppercase font-black text-black">
                Nathan <br />
              </h1>
              <h2 className="2xl:text-8xl sm:text-5xl text-3xl 2xl:py-3 2xl:px-7 py-2 w-fit px-4 uppercase font-black bg-black text-white rounded-3xl">
                Astorga
              </h2>
              <h3 className="2xl:text-6xl sm:text-4xl text-2xl text-black font-black px-1">
                Web Designer 🤪
              </h3>
            </div>
           
      
            <p className="text-black text-base">
              Your friendly neighborhood frontend developer, UX architect, and
              JavaScript engineer. I spend my days (and often nights) painting
              the Internet canvas with PROJECTS and lines of code, turning
              zeroes and ones into immersive, interactive experiences.
            </p>
         
          </div>
          

          <Link
            to="/Projects"
            variant="text"
            className="flex w-full font-medium text-base normal-case text-black gap-10 p-0"
          >
            Come and explore my sample projects!{" "}
            <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Link>
        </div>
 
      </div>
    </div>
  );
};
