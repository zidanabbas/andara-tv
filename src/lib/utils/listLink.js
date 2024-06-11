import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
const listLink = [
  {
    name: "Home",
    link: "/",
    icon: <IoHomeOutline size={24} />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <CgProfile size={24} />,
  },
  {
    name: "About",
    link: "/about",
    icon: <SiAboutdotme size={24} />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IoMdContact size={24} />,
  },
];

export default listLink;
