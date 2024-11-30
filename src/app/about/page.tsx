import React from "react";

const About = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-4">
    <div className="p-10 text-center bg-white text-text border border-border rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-background">About</h1>
      <p className="text-lg text-background mb-2">
        Matthew Jiang is an undergraduate student at the University of Southern California (Class of &apos;25) majoring in Computer Engineering and Computer Science.
      </p>
      <p className="text-base text-background">
      With a strong foundation in software development and robotics, Matthew has interned at Safran Passenger Innovations and Singular Medical, contributing to projects ranging from embedded systems to automated testing frameworks. He currently serves as Vice President and Software Lead of USC&apos;s Autonomous Underwater Vehicle Design Team, leading a team of engineers in developing advanced robotics systems for the RoboSub Competition.

Matthew&apos;s technical expertise spans programming languages such as C++, Python, and Verilog, as well as platforms like ROS, Docker, and Linux. 
Through his academic, professional, and extracurricular experiences, Matthew demonstrates a commitment to driving technological innovation and solving complex challenges.
      </p>
    </div>
    </div>
  );
};

export default About;
