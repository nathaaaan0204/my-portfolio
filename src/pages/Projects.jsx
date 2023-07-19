import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export const Projects = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="w-full xl:py-[200px] 2xl:px-[200px] py-[200px] px-[50px] md:px-[100px] ">
      <h2 className="2xl:text-8xl sm:text-5xl text-3xl 2xl:py-3 2xl:px-7 py-2 w-fit px-4 font-black bg-black text-white rounded-3xl mb-10">
        Projects
      </h2>
      <Fragment >
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
           <h2 className="text-xl text-black font-normal">Happy Wally</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex lg:flex-row flex-col w-full gap-[48px]">
              <div className="flex flex-col gap-[48px]">
                 <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <Link
            to=""
            variant="text"
            className="flex w-full font-medium text-base underline normal-case text-black gap-10 p-0"
          >
            View Project
         
          </Link>
              </div>
           <div className="w-full">
              <img src="/HappyWally.png" className="min-w-[350px]"></img>
           </div>
          
            </div>
         
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
           <h2 className="text-xl text-black font-normal">Superrare</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex w-full gap-[48px]">
              <div className="flex flex-col gap-[48px]">
                 <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <Link
            to=""
            variant="text"
            className="flex w-full font-medium text-base underline normal-case text-black gap-10 p-0"
          >
            View Project
         
          </Link>
              </div>
           <div className="w-full">
              <img src="public/HappyWally.png"></img>
           </div>
          
            </div>
         
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
           <h2 className="text-xl text-black font-normal">Mind Blowing Bites</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex w-full gap-[48px]">
              <div className="flex flex-col gap-[48px]">
                 <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <Link
            to=""
            variant="text"
            className="flex w-full font-medium text-base underline normal-case text-black gap-10 p-0"
          >
            View Project
         
          </Link>
              </div>
           <div className="w-full">
              <img src="public/HappyWally.png"></img>
           </div>
          
            </div>
         
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
           <h2 className="text-xl text-black font-normal">Recozy</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex w-full gap-[48px]">
              <div className="flex flex-col gap-[48px]">
                 <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <Link
            to=""
            variant="text"
            className="flex w-full font-medium text-base underline normal-case text-black gap-10 p-0"
          >
            View Project
         
          </Link>
              </div>
           <div className="w-full">
              <img src="public/HappyWally.png"></img>
           </div>
          
            </div>
         
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
           <h2 className="text-xl text-black font-normal">Socal Ponds</h2>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex w-full gap-[48px]">
              <div className="flex flex-col gap-[48px]">
                 <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <p>
                 Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. dreams.
            </p>
            <Link
            to=""
            variant="text"
            className="flex w-full font-medium text-base underline normal-case text-black gap-10 p-0"
          >
            View Project
         
          </Link>
              </div>
           <div className="w-full">
              <img src="public/HappyWally.png"></img>
           </div>
          
            </div>
         
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
};
