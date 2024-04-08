import React from "react";

export default function Header({ title }) {
  return (
    <header>
      <h1>My Title is {title}</h1>
    </header>
  );
}

Header.defaultProps = {  
  title: "Hello World",
};
