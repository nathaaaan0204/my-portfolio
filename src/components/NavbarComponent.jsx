import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        to="/About"
        className="text-black hover:bg-blue-700 px-3 py-2 rounded-md"
      >
        About
      </Link>
      <Link
        to="/Projects"
        className="text-black hover:bg-blue-700 px-3 py-2 rounded-md"
      >
        Projects
      </Link>
      <Link
        to="/Contact"
        className="text-black hover:bg-blue-700 px-3 py-2 rounded-md"
      >
        Contact
      </Link>
    </ul>
  );
}

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
   
<Navbar className="max-w-full bg-white z-[100] px-10 py-3 fixed top-10 mx-[16px] md:mx-[100px] 2xl:mx-[200px] 2xl:w-[calc(100%-400px)] md:w-[calc(100%-200px)] w-[calc(100%-32px)]"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
      <Link
              to="/"
              className="text-black hover:bg-blue-700 px-3 py-2 rounded-md"
            >
              Logo
            </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    </>
  );
};
