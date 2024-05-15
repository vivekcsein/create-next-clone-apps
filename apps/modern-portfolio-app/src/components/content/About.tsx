import React from "react";
import SectionHeading from "../Layout/SectionHeading";

const About = () => {
  const heading = "About me 2024";
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia ex in.";

  return (
    <div className="pt-20 pb-16">
      <section>
        <SectionHeading heading={heading} desc={desc} />
      </section>
    </div>
  );
};

export default About;
