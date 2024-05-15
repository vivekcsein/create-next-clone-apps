import React from "react";

type UI_ButtonProps = {
  label: string;
};

const UI_Button = ({ label }: UI_ButtonProps) => {
  return (
    <button className="rounded lg:text-16  text-white font-bold px-5 lg:px-10 py-2 overflow-hidden group bg-primary hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 hover:ring-2 hover:ring-offset-2  transition-all duration-300 ease-out">
      {label}
    </button>
  );
};
export default UI_Button;
