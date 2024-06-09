import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
const listLink = [
  {
    name: "Home",
    link: "/",
    icon: <IoHomeOutline />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <CgProfile />,
  },
  {
    name: "About",
    link: "/about",
    icon: <SiAboutdotme />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IoMdContact />,
  },
];

export default listLink;
