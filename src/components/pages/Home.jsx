import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "../home/SocialLinks";
import SectionLayout from "@/Layout/SectionLayout";
import { useAOSAnimation } from "@/hooks/useAOSAnimation";

function Home() {
  useAOSAnimation(1500);
  const mainContent = (
    <div
      className="flex flex-col items-center justify-center w-full h-full gap-10"
      data-aos="zoom-in"
    >
      {/* top avatar */}
      <div className="relative flex items-center justify-center w-40 h-40 overflow-hidden rounded-full">
        <span className="absolute w-44 h-44 bg-gradient-to-br from-mainColor to-subBgColor animate-spin-slow"></span>
        <div className="z-10 w-36 h-36 rounded-full bg-subBdColor bg-[url('./assets/myAvatar.png')] bg-center bg-93%"></div>
      </div>

      {/* center type animation */}
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-3 text-xl font-bold xs:text-2xl sm:text-3xl md:text-4xl">
          <span>Hi, I am</span>
          <span className="text-mainColor ">
            <Typewriter
              options={{
                strings: [
                  "Robert J WANG",
                  "a Web Designer",
                  "a Front-end Developer",
                ],
                autoStart: true,
                delay: 150,
                loop: true,
              }}
            />
          </span>
        </div>

        <p className="text-xs text-center text-transparent xs:text-sm sm:text-base md:text-xl bg-clip-text bg-gradient-to-r from-textColor to-mainColor ">
          I am a frontend web developer. <br />
          I can provide clean code and pixel perfect design. <br />I also make
          website more & more interactive with web animations.
        </p>
      </div>

      {/* bottom links */}
      <SocialLinks />
    </div>
  );
  return <SectionLayout mainContent={mainContent} />;
}

export default Home;
