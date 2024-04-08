import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostNav() {
  return (
    <nav>
      <li>
        <Link to="/postpage/1">page1</Link>
      </li>
      <li>
        <Link to="/postpage/2">page2</Link>
      </li>
      <li>
        <Link to="/postpage/3">page3</Link>
      </li>
      <li>
        <Link to="/postpage/homepage">Home Page</Link>
      </li>
      <Outlet />
    </nav>
  );
}
