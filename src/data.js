import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineInfo,
  AiOutlinePaperClip,
  AiOutlineRedEnvelope
} from "react-icons/ai";
import "./styles.css";

export const links = [
  {
    id: 1,
    link: "/",
    text: "Home",
    svgIcon: <AiOutlineHome />
  },
  {
    id: 2,
    link: "/about",
    text: "About",
    svgIcon: <AiOutlineInfo />
  },
  {
    id: 3,
    link: "/projects",
    text: "Projects",
    svgIcon: <AiOutlinePaperClip />
  },
  {
    id: 4,
    link: "/contact",
    text: "Contact",
    svgIcon: <AiOutlineRedEnvelope />
  }
];

export const socialLinks = [
  {
    id: 11,
    link: "facbook.com",
    icons: <BsFacebook />
  },
  {
    id: 12,
    link: "facbook.com",
    icons: <BsInstagram />
  },
  {
    id: 13,
    link: "facbook.com",
    icons: <BsLinkedin />
  },
  {
    id: 14,
    link: "facbook.com",
    icons: <BsGithub />
  }
];
