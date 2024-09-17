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
      <div className="relative flex items-center justify-center overflow-hidden rounded-full w-44 h-44">
        <span className="absolute w-48 h-48 bg-gradient-to-br from-mainColor to-subBgColor animate-spin-slow"></span>
        <div className="z-10 w-40 h-40 rounded-full bg-subBdColor bg-[url('./assets/myAvatar.png')] bg-center bg-93%"></div>
      </div>

      {/* center type animation */}
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-3 text-xl font-bold xs:text-2xl sm:text-3xl md:text-4xl">
          <span>Hi, I am</span>
          <span className="text-mainColor ">
            <Typewriter
              options={{
                strings: [
                  "Robert Jiqiang WANG",
                  "a Master's student ",
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

        <p className="flex flex-col justify-between gap-1 text-xs text-center text-transparent xs:text-sm sm:text-base md:text-xl lg:text-2xl bg-clip-text bg-gradient-to-r from-mainColor to-textColor">
          <span>Majoring in Applied Technology of Computing.</span>
          <span>Committed to becoming a Web Designer & Developer.</span>
          <span>
            Enthusiastic about new technologies, passionate about work, positive
            about life.
          </span>
        </p>
      </div>

      {/* bottom links */}
      <SocialLinks />
    </div>
  );
  return <SectionLayout mainContent={mainContent} />;
}

export default Home;
