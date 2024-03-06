import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SideBarMenuItem = ({ menu }) => {
    const { name, path ,subName} = menu;
    return (
        <div className="my-4">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive ? "sideLinkActive" : "sideLink"
                }
            >
               <button className="">
                <p> {name}</p>
                <p className="mt-3">{subName}</p>
              
               </button>
               
              
               
            </NavLink>
        </div>
    );
};

SideBarMenuItem.propTypes = {
    menu: PropTypes.object,
    subMenu: PropTypes.array,
};

export default SideBarMenuItem;