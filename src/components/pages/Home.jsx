import React from "react";
import SocialLinks from "../home/SocialLinks";
import SectionLayout from "@/Layout/SectionLayout";
import { useAOSAnimation } from "@/hooks/useAOSAnimation";
import TypewriterText from "@/components/home/TypewriterText";
import { homeIntroduction } from "@/data/site";
import avatar from "@/assets/profile/avatar.webp";

function Home() {
  useAOSAnimation(1500);
  const mainContent = (
    <div
      className="flex flex-col items-center justify-center w-full h-full gap-10"
      data-aos="fade-up"
    >
      {/* top avatar */}
      <div className="relative flex items-center justify-center overflow-hidden rounded-full w-44 h-44">
        <span className="absolute w-48 h-48 bg-gradient-to-br from-mainColor to-subBgColor animate-spin-slow"></span>
        <div
          className="z-10 h-40 w-40 rounded-full bg-subBdColor bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${avatar})`, backgroundSize: "100%" }}
        ></div>
      </div>

      {/* center type animation */}
      <div className="flex flex-col items-start justify-center gap-5">
        
        <div className="flex items-center justify-center gap-3 text-xl lg:text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-textColor to-textColor">👋👋 Hi, I’m</span>
          <span className="text-mainColor ">
            <TypewriterText />
          </span>
        </div>

        <p className="flex flex-col justify-between gap-1 text-xs text-transparent text-start xs:text-sm sm:text-base lg:text-xl bg-clip-text bg-gradient-to-r from-mainColor to-textColor">
          {homeIntroduction.map((line) => <span key={line}>{line}</span>)}
        </p>
      </div>

      {/* bottom links */}
      <SocialLinks />
    </div>
  );
  return <SectionLayout mainContent={mainContent} />;
}

export default Home;
