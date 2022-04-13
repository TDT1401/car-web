import React from "react";

export const MenuMavigator = ({ key, text }: { key: number; text: string }) => {
  return (
    <a href="" className="uppercase py-2" key={key}>
      <li className="inline-block hover:bg-slate-400 py-2 px-7">{text}</li>
    </a>
  );
};
