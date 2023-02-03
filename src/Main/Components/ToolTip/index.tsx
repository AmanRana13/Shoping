import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Tooltip.scss";

interface Props {
  title?: React.ReactNode | any;
  children: React.ReactNode;
}

const Tooltip = ({ children, title }: Props) => {
  const as = title;

  const [toggle, setToggle] = useState<boolean>(false);
  const CreateDiv = document.createElement("div");
  CreateDiv.setAttribute("id", "tooltip");

  // useEffect(() => {
  //   showTooltip(toggle);
  // }, [toggle]);

  const showTooltip = (show: boolean) => {
    console.log(":::::::::::::::::::::", show ? "show" : "hide");
    const tooltip = document.getElementById("tooltip");

    tooltip
      ? tooltip.setAttribute("class", show ? "visibel" : "hide")
      : document.body.appendChild(CreateDiv);
  };

  return (
    <>
      <span
        id="tooltip_data"
        className="tooltip_data"
        onClick={() => {
          showTooltip(!toggle);
          setToggle(!toggle);
        }}
        // onMouseLeave={() => showTooltip(false)}
        // onBlur={() => showTooltip(false)}
      >
        {children}
      </span>
      {console.log(title)}
      {createPortal(as, CreateDiv, "asd")}
    </>
  );
};
export default Tooltip;
