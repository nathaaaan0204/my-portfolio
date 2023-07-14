import React from "react";

export const MyExperienceSection = () => {
  return (
    <div className="gap-12 flex flex-col items-start text-black">
      <div className="flex flex-col gap-2">
        <h3 className="2xl:text-6xl md:text-4xl text-2xl font-black text-black">Experience</h3>
        <p className="text-green font-black">What I Learn</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black text-base">2017 - 2022</p>
        <h4 className="text-xl font-black text-black">Java Programming</h4>
        <p className="text-black text-base">
          During my college years, I enthusiastically delved into the world of
          Java programming. Embracing its versatility and object-oriented
          paradigm, I honed my skills in building robust applications and
          solving complex problems. The journey of learning Java not only
          broadened my understanding of programming concepts but also ignited a
          passion for creating efficient and scalable software solutions.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black text-base">2022 - 2023</p>
        <h4 className="text-xl font-black text-black">Web Development</h4>
        <p className="text-black text-base">
          During this year, I self studied web development. I have learned HTML,
          CSS and Javascript and also practiced creating projects. I also
          learned Bootstrap to create projects more easier.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black text-base">2023 - Current</p>
        <h4 className="text-xl font-black text-black">Web Design</h4>
        <p className="text-black text-base">
          I am currently a full time employee at NMS Philippines as a Website
          Designer. Here at NMS, we design websites using Figma and since we
          also handle the front end development of some projects, I have learned
          more about bootstrap and ReactJS.
        </p>
      </div>
    </div>
  );
};
