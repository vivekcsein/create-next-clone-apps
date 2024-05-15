import React from "react";

type SectionHeadingProps = {
  heading: string;
  desc: string;
  children?: string | JSX.Element;
};
const SectionHeading = ({ heading, desc }: SectionHeadingProps) => {
  return (
    <div className="text-center p-3">
      <h1 className=" font-semibold">{heading}</h1>
      <h5>{desc}</h5>
    </div>
  );
};

export default SectionHeading;
