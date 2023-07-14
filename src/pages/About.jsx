import { Button } from "@material-tailwind/react";
import { Footer } from "../components/FooterComponent";
import { MyExperienceSection } from "../components/SectionComponents/MyExperienceSection";
import { MyStorySection } from "../components/SectionComponents/MyStorySection";
import { MyTechStackSection } from "../components/SectionComponents/MyTechStackSection";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { LeftBgComponent } from "../components/SectionComponents/LeftBgComponent";



export const About = () => {
  return (
    <div className="flex h-screen bg-[white]">
      <LeftBgComponent />
      <div className="lg:w-1/2 snap-x snap-mandatory  h-screen overflow-y-scroll">
        <div className="lg:px-[100px] 2xl:p-[200px] py-[200px] sm:px-[100px] px-[32px]  flex flex-col gap-12 justify-center items-center ">
          <MyStorySection/>
          
          <MyTechStackSection />
          <MyExperienceSection />
          
          <Link to="/Projects" variant="text" className="flex w-full font-medium text-base normal-case text-black gap-10 p-0">
        Come and explore my sample projects! <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
      </Link>
  
        </div>
        <Footer />
        
      </div>
    </div>
  );
};
