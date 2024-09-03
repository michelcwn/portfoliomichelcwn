'use client';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import SectionHeader from '@/components/SectionHeader';
import TechIcon from '@/components/TechIcon';
import ToolboxItems from '@/components/ToolboxItems';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaGithub,
  FaStarOfLife,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaVuejs,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiFramer, SiNuxtdotjs } from 'react-icons/si';

import React, { useRef } from 'react';

const toolboxItems = [
  {
    title: 'Javascrit',
    iconType: IoLogoJavascript,
  },
  {
    title: 'React',
    iconType: FaReact,
  },
  {
    title: 'Next',
    iconType: RiNextjsFill,
  },
  {
    title: 'Framer',
    iconType: SiFramer,
  },
  {
    title: 'Tailwind',
    iconType: RiTailwindCssFill,
  },
  {
    title: 'Github',
    iconType: FaGithub,
  },
];
const toolboxItemsTwo = [
  {
    title: 'HTML',
    iconType: FaHtml5,
  },
  {
    title: 'CSS',
    iconType: FaCss3Alt,
  },
  {
    title: 'Sass',
    iconType: FaSass,
  },
  {
    title: 'Node',
    iconType: FaNodeJs,
  },
  {
    title: 'Vue',
    iconType: FaVuejs,
  },
  {
    title: 'Nuxt',
    iconType: SiNuxtdotjs,
  },
];

const hobbies = [
  { title: 'Photograpy', emoji: '📷', left: '50%', top: '5%' },
  { title: 'Reading', emoji: '📚', left: '5%', top: '5%' },
  { title: 'Fitness', emoji: '🏋️', left: '5%', top: '65%' },
  { title: 'Running', emoji: '🏃', left: '45%', top: '70%' },
  { title: 'Travel', emoji: '✈️', left: '35%', top: '40%' },
  { title: 'Gaming', emoji: '🎮', left: '10%', top: '35%' },
  { title: 'Cinema', emoji: '🎥', left: '70%', top: '40%' },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Beyond the code: My work philosophy"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src="/images/book-cover.png"
                  alt="book"
                  width={260}
                  height={260}
                />
              </div>
            </Card>
            {/* Toolbox */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
                className=""
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName=""
                direction="right"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            {/* Beyond */}
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <div className="">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests beyond the digital realm"
                  className="px-6 py-6"
                />
              </div>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map(({ title, emoji, left, top }) => (
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full py-1.5 absolute"
                    key={title}
                    style={{
                      left: left,
                      top: top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">{title}</span>
                    <span>{emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image
                src="/images/map.png"
                alt="map"
                width={800}
                height={800}
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 after:pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 -z-20 animate-ping [animation-duration:2s] " />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 -z-10" />
                <Image
                  src="/images/michelcwn.png"
                  alt="smile"
                  width={80}
                  height={80}
                  className="size-20 rounded-full"
                />{' '}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
