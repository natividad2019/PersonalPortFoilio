import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My fascination with technology began early and blossomed into a
          passion for software development. I thrive on using technology to
          tackle real-world challenges and create innovative solutions. Through
          experience, I've gained proficiency in full-stack web development,
          mastering both front-end and back-end technologies. Additionally, I
          dedicate my free time to teaching others about technology, sharing my
          knowledge and inspiring others to explore the digital world
        </p>
        <br />
        <p className="text-xl">
          Now, I'm enthusiastic about presenting my projects and teaming up with
          like-minded individuals to drive positive change through technology.
          I'm passionate about working closely with people, aiming to change
          lives through our collaborative efforts
        </p>
      </div>
    </div>
  );
};

export default About;
