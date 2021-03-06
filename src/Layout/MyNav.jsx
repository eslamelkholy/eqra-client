import React, { useContext, useState, useEffect } from "react";
import "../styles/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../context/userContext";
import { Link, useHistory } from "react-router-dom";
import EventNoteIcon from "@material-ui/icons/EventNote";

const MyNav = () => {
  const {
    data: { user: currentUser },
  } = useContext(UserContext);

  const [profileData, updateProfileData] = useState({});
  useEffect(() => {
    updateProfileData(currentUser);
  });

  return (
    <>
      <nav className="nav my-nav">
        <Link className={`menu-item m-md-3 pb-2 ${window.location.pathname === '/' ? 'active' : ''}`} to="/">
          <FontAwesomeIcon item icon="home" size="1x" className="mt-3 mx-1" />
          <span className="mt-2 pt-1 ml-2"> Home </span>
        </Link>
        <Link
          className={`menu-item m-md-3 pb-2 ${window.location.pathname.includes('/profile') ? 'active' : ''}`}
          to={`/profile/${profileData.role}/${profileData.id}`}
        >
          <FontAwesomeIcon
            item
            icon="user-circle"
            size="1x"
            className="mt-3 mx-1"
          />
          <span className="mt-2 pt-1 ml-2">Profile</span>
        </Link>

        <Link className={`menu-item m-md-3 pb-2 ${window.location.pathname === '/events' ? 'active' : ''}`} to="/events">
          <FontAwesomeIcon
            item
            icon="calendar-week"
            size="1x"
            className="mt-3 mx-1"
          />
          <span className="mt-2 pt-1 ml-2">Events</span>
        </Link>

        <Link className={`menu-item m-md-3 pb-2 ${window.location.pathname === '/bookGalery' ? 'active' : ''}`} to="/bookGalery">
          <FontAwesomeIcon
            item
            icon="book-open"
            size="1x"
            className="mt-3 mx-1"
          />
          <span className="mt-2 pt-1 ml-2">Book Galery</span>
        </Link>
        <Link className={`menu-item m-md-3 pb-2 ${window.location.pathname === '/category' ? 'active' : ''}`} to="/category">
          <FontAwesomeIcon
            item
            icon="bookmark"
            size="1x"
            className="mt-3 mx-1"
          />
          <span className="mt-2 pt-1 ml-2">Categories</span>
        </Link>
        <Link className={`menu-item m-md-3 pb-2`} to="/logout">
          <FontAwesomeIcon
            item
            icon="user-circle"
            size="1x"
            className="mt-3 mx-1"
          />
          <span className="mt-2 pt-1 ml-2">Log Out</span>
        </Link>
      </nav>
    </>
  );
};
export default MyNav;
