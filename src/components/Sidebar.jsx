import React, { useState } from "react";
import { FaChevronRight, FaHome, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Sidebar.css"; // Create this CSS file

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      subItems: [
        { name: "Overview", path: "/overview" },
        { name: "Analytics", path: "/analytics" },
        { name: "Reports", path: "/reports" },
      ],
    },
    {
      title: "Users",
      icon: <FaUsers />,
      subItems: [
        { name: "All Users", path: "/users" },
        { name: "Add New", path: "/users/add" },
        { name: "Roles", path: "/users/roles" },
      ],
    },
    {
      title: "Settings",
      icon: <FaCog />,
      subItems: [
        { name: "Profile", path: "/settings/profile" },
        { name: "Security", path: "/settings/security" },
        { name: "Preferences", path: "/settings/preferences" },
      ],
    },
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index}>
          <div
            className={`menu-item ${activeMenu === index ? "active" : ""}`}
            onClick={() => toggleMenu(index)}
          >
            <span className="icon">{item.icon}</span>
            {item.title}
            <FaChevronRight
              className={`arrow ${activeMenu === index ? "rotated" : ""}`}
            />
          </div>
          <div className={`submenu ${activeMenu === index ? "open" : ""}`}>
            {item.subItems.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                to={subItem.path}
                className="submenu-item"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;