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
      data-aos="fade-up"
    >
      {/* top avatar */}
      <div className="relative flex items-center justify-center overflow-hidden rounded-full w-44 h-44">
        <span className="absolute w-48 h-48 bg-gradient-to-br from-mainColor to-subBgColor animate-spin-slow"></span>
        <div className="z-10 w-40 h-40 rounded-full bg-subBdColor bg-[url('./assets/myAvatar.png')] bg-center bg-100%"></div>
      </div>

      {/* center type animation */}
      <div className="flex flex-col items-start justify-center gap-5">
        
        <div className="flex items-center justify-center gap-3 text-xl lg:text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-textColor to-textColor">👋👋 Hi, I’m</span>
          <span className="text-mainColor ">
            <Typewriter
              options={{
                strings: [
                  "Robert J. WANG.",
                  "a Software Developer.",
                ],
                autoStart: true,
                delay: 150,
                loop: true,
              }}
            />
          </span>
        </div>

        <p className="flex flex-col justify-between gap-1 text-xs text-transparent text-start xs:text-sm sm:text-base lg:text-xl bg-clip-text bg-gradient-to-r from-mainColor to-textColor">
          <span>With a background in Applied Technology of Computing, </span>
          <span>I’m all about diving into new challenges, chasing innovation, </span>
          <span>
            and growing in the fast-paced tech scene.
          </span>
           <span>
            Life’s too short for boring code or a dull mindset,
          </span>
           <span>
             so I bring passion and positivity to everything I do. ✨✨✨
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
