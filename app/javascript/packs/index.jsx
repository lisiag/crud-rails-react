import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "../components/index";

// document.addEventListener("DOMContentLoaded", () => {
//   render(<App />, document.body.appendChild(document.createElement("div")));
// });

const root = createRoot(document.documentElement);
const element = <App />;
root.render(element);
