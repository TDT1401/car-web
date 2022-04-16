import React from "react";
import "./Bottom.css";
import { Li } from "./Li";
const Bottom = () => {
  const menu = [
    "Home",
    "Vinfast",
    "Bmw",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Lexus",
  ];

  const footer = ["NT Auto", "DT Auto", "Auto", "DUCTHUAN"];

  return (
    <footer>
      <div className="h-[350px] bg-orange-500">
        <div className="container row">
          {footer.map((value, key) => {
            return (
              <div className="items-footer mt-4" key={key}>
                <h1 className="text-white text-3xl mb-2">{value}</h1>
                <ul className="w-full">
                  {menu.map((value, key) => {
                    return <Li key={key} text={value} />;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-10 bg-black text-center relative">
        <a className="text-white absolute pt-2 " href="App.tsx">
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Bottom;
