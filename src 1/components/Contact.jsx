import React from "react";
import { contactData, contactInputData } from "../data";
import SocialLinks from "./widgets/SocialLinks";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "./widgets/SectionHeader";

export default function Contact() {
  const headerContent = <SectionHeader title="contact me" />;

  const mainContent = (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden xl:w-3/4 3xl:w-2/3 md:flex-row">
      {/* left */}
      <ul className="flex flex-col items-center justify-center w-full h-full gap-2 p-2 md:gap-10 basis-1/4 md:basis-5/12">
        {contactData.map((data) => (
          <li
            key={data.id}
            className="flex items-center justify-start w-full gap-5 p-2 border rounded cursor-pointer border-subBdColor md:p-5 bg-subBgColor group hover:animate-contactListScale"
          >
            {/* icon */}
            <p className="flex items-center justify-center w-6 h-6 rounded-full md:w-12 md:h-12 bg-mainColor20">
              <img className="w-3/5 h-3/5" src={data.img} alt="" />
            </p>
            {/* text */}
            <div className="flex flex-col justify-center gap-2">
              <h3 className="hidden md:block md:text-xl">{data.title}</h3>
              <p className="text-subColor group-hover:text-mainColor">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* right */}
      <div className="flex items-center justify-center w-full h-full px-2 md:p-5 basis:3/4 md:basis-7/12">
        <form
          className="flex flex-col items-center justify-center w-full h-full gap-2 px-5 border rounded-lg border-subBdColor bg-subBgColor"
          action="#"
        >
          <ul className="flex flex-col w-full gap-2 basis-7/12">
            {contactInputData.map((data) => (
              <li
                key={data.id}
                className="flex flex-col justify-around w-full basis-1/3"
              >
                <h2 className="text-lg">{data.title}</h2>
                <input
                  className="w-full p-2 bg-transparent border rounded outline-none text-subColor border-subBdColor focus:bg-transparent"
                  type="text"
                  placeholder={data.placeHolder}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-start justify-between w-full basis-5/12">
            <li className="w-full basis-4/5">
              <h2 className="text-lg">Message</h2>
              <textarea
                className="w-full p-2 bg-transparent border rounded outline-none resize-none h-1/2 md:h-3/4 border-subBdColor focus:bg-transparent"
                placeholder="Enter your message"
              ></textarea>
            </li>
            <li className="flex items-end justify-end w-full basis-1/5">
              <button className="p-2 text-xs uppercase duration-500 rounded text-mainColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor">
                Send Email
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex items-center justify-center w-full border-t h-3/5 lg:justify-between border-subBdColor">
      <div>
        <SocialLinks />
      </div>
      <p className="hidden text-xs lg:block lg:text-base">
        <span>© 2023, All right reserved</span> @{" "}
        <a
          className="text-subColor"
          href="https://github.com/Robert-J-WANG"
          target="_blank"
          rel="noreferrer"
        >
          Robert-J-WANG
        </a>
      </p>
    </div>
  );

  return (
    <SectionLayout
      id="contact"
      headerContent={headerContent}
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
}
