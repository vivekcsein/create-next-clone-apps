import React from "react";
import UI_Button from "../Buttons_/UI_Button";

const UI_Input = () => {
  return (
    <div className="w-full h-14 relative mt-5 ">
      <input
        type="email"
        placeholder="Enter Your Name"
        name=""
        className="bg-transparent h-full  w-full lg:w-[80%] rounded-full "
      />
      <div className="mt-5  w-full lg:w-[80%] flex justify-center ">
        <UI_Button label="submit" />
      </div>
    </div>
  );
};

export default UI_Input;
