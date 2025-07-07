import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const a = React.createElement("div", { className: "container" }, [
  React.createElement("h1", { key: "h1" }, "Hello World"),
  React.createElement("p", { key: "p" }, "This is a simple React application."),
  React.createElement("img", { key: "img", src: reactLogo }),
  React.createElement("img", { key: "img1", src: viteLogo }),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(a);
