import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { buttonIcon } from "../utils/Data";

export const Contact = () => {
  return (
    <div className="h-screen 2xl:p-[200px] py-[200px] px-[50px] md:px-[100px]">
      <h2 className="2xl:text-8xl sm:text-5xl text-3xl 2xl:py-3 2xl:px-7 py-2 w-fit px-4 font-black bg-black text-white rounded-3xl mb-10">
        Contact me
      </h2>
      <div className="flex flex-col md:flex-row  px-[100px]">
        <div className="md:w-1/2 ">
          <ul className="flex flex-col gap-12">
            <li className="flex flex-col">
              <a href="">
                <EnvelopeIcon className="h-8 w-8"></EnvelopeIcon>
                <Typography className="text-green font-semibold text-base">
                  Email
                </Typography>
                <Typography className="text-black font-light text-base">
                  sakuuragii@gmail.com
                </Typography>
              </a>
            </li>
            <li className="flex flex-col">
              <a href="">
                <PhoneIcon className="h-8 w-8"></PhoneIcon>
                <Typography className="text-green font-semibold text-base">
                  Phone
                </Typography>
                <Typography className="text-black font-light text-base">
                  09496866395
                </Typography>
              </a>
            </li>
            <li className="flex flex-col">
              <a href="">
                <MapPinIcon className="h-8 w-8"></MapPinIcon>
                <Typography className="text-green font-semibold text-base">
                  Location
                </Typography>
                <Typography className="text-black font-light text-base">
                  Baguio City, Benguet 2600 Philippines
                </Typography>
              </a>
            </li>
            <li>
              <Typography className="text-green font-semibold text-base">
                Location
              </Typography>
              <div className="flex gap-[40px] flex-wrap">
                {buttonIcon.map((item) => (
                  <div className="flex">{item.icon}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 ">
          <iframe className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61240.07097805917!2d120.54754292075813!3d16.399187938097313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a113c98366bf%3A0xc1add28ad4d5f164!2sBaguio%20City%2C%20Baguio%2C%20Benguet!5e0!3m2!1sen!2sph!4v1689562387777!5m2!1sen!2sph"
            width="100%"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
