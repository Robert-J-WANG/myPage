
import AboutMe from "../about/Introduction";
import MySkill from "../about/MySkill";
import Education from "../about/Education";
import SectionHeader from "../widgets/SectionHeader";

export default function About() {
  return (
   <div
      className="flex flex-col items-center justify-center w-full h-full gap-20 px-20 py-20 "
    >
      
      <div className="flex flex-col w-full h-full gap-10 border-[2px] border-borderColor rounded-xl px-5 py-10">
        <SectionHeader title={"About Me" }>
          <span>👨‍💻👨‍💻</span>
        </SectionHeader>
        <AboutMe />
      </div>
       <div className="flex flex-col w-full h-full gap-10 border-[2px] border-borderColor rounded-xl px-5 py-10">
        <SectionHeader title={"About Skills"}/>
        <MySkill />
      </div>
      <div className="flex flex-col w-full h-full gap-10 border-[2px] border-borderColor rounded-xl px-5 py-10">
        <SectionHeader title={"About Education"}/>
        <Education />
      </div>
      

    </div>
  );
}
