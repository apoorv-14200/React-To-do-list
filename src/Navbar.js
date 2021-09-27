import React from "react";

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="site-name">ToDoList</div>
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
      ></img>
      <img
        className="countimg"
        src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png"
      ></img>
      <div className="count-items">{props.count}</div>
    </div>
  );
};

export default NavBar;
