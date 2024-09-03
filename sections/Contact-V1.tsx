'use client';
import { GoArrowUpRight } from 'react-icons/go';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-indigo-500 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url('/images/grain.jpg')`,
            }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
            <div className="">
              <h2 className="capitalize font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                amet sed dicta fugiat corrupti pariatur illo eius consequatur
                eveniet.
              </p>
            </div>
            <div>
              <a href="mailto:michel.cwn@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <GoArrowUpRight className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
