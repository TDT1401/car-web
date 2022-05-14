import React from "react";

export const MenuNavigator = ({ key, text }: { key: number; text: string }) => {
  return (
    <a href="/" className="uppercase h-full" key={key}>
      <li className="inline-block hover:bg-[white] hover:text-[black] py-2 px-7">{text}</li>
    </a>
  );
};
