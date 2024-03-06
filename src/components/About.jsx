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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde
          consectetur qui, laudantium odit nesciunt hic labore explicabo nisi
          alias, adipisci suscipit? Maiores labore accusantium rem. Nesciunt
          dolorum sint at vel dolor soluta, magnam minus nulla earum aspernatur
          quam quod animi eius magni aliquam eos iure pariatur molestias error
          facilis.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          delectus, facilis labore consequuntur sit deleniti pariatur, ab qui
          nihil explicabo repellat doloribus odio repudiandae natus, facere
          dolores tempora nobis fuga ipsa reprehenderit praesentium sed laborum.
          Id suscipit in facere, corporis praesentium eius delectus laborum
          dolor, ab illum repudiandae similique blanditiis?
        </p>
      </div>
    </div>
  );
};

export default About;
