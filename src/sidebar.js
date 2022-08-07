import { links, socialLinks } from "./data";
import { ImCross } from "react-icons/im";
import "./styles.css";
import { useGloabalContext } from "./context";

export default function Sidebar() {
  const { isSidebarOpen, sidebarClose } = useGloabalContext();

  return (
    <main className="sidebar">
      <div
        className={`${isSidebarOpen ? "show-sidebar-main " : "sidebar-main"} `}
      >
        <div className="menuList">
          {links.map((value) => {
            const { id, link, text, svgIcon } = value;
            return (
              <ul key={id} className="menuLinkList">
                <li className="menuLinkItems">
                  <a href={link}>
                    {/* {svgIcon} */}
                    {text}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="socialIconList">
          {socialLinks.map((links) => {
            return (
              <ul key={links.id} className="socialMediaList">
                <li className="socialMediaItems">
                  <a href={links.link}> {links.icons} </a>
                </li>
              </ul>
            );
          })}
        </div>
        <ImCross className="sidebarCancelButton" onClick={sidebarClose} />
      </div>
    </main>
  );
}
