import React from "react";
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
      <div className="h-96 bg-[#161616]">
        <div className="container row">
          {footer.map((value, key) => {
            return (
              <div className=" mt-4" key={key}>
                <h1 className="text-white text-3xl mb-2">{value}</h1>
                <ul className="w-full text-white">
                  {menu.map((value, key) => {
                    return <Li key={key} text={value} />;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-10 bg-black text-center">
        <div className="text-white items-center pt-2 cursor-pointer"
        onClick={() => 
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }>
          Back to top
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
