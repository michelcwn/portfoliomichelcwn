'use client';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const testimonials = [
  {
    name: 'Matthew S.',
    position: 'Boulanger chocolatier',
    text: 'Michel est un créateur de site web exceptionnel. Son sens aigu du design et sa compréhension des besoins de ses clients sont impressionnants.',
    avatar: '/images/memoji-avatar-1.png',
  },
  {
    name: 'Alexandra Z.',
    position: 'Psychologue',
    text: 'Rapide et efficace. Travail soigné.',
    avatar: '/images/memoji-avatar-2.png',
  },
  {
    name: 'Atelier de Jimmy',
    position: 'Garagiste',
    text: "Site réalisé avec beaucoup d'écoute et de professionnalisme.",
    avatar: '/images/memoji-avatar-3.png',
  },
  {
    name: 'Véra M.',
    position: 'Blogueuse',
    text: "J'ai confié la création de mon blog personnel de voyage à Michel et je suis plus que satisfait du résultat.",
    avatar: '/images/memoji-avatar-4.png',
  },
];

interface WordListProps {
  direction: 'left' | 'right';
  duration: number;
}

const WordList: React.FC<WordListProps> = ({ direction, duration }) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    controls.start({
      x: direction === 'left' ? '-100%' : '0%',
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    });
  }, [controls, direction, duration]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: direction === 'left' ? '-100%' : '0%',
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    });
  };

  return (
    <motion.div
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="flex flex-none gap-8"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>
          {testimonials.map(({ text, name, avatar, position }) => (
            <>
              <Card
                key={name}
                className="max-w-xs md:max-w-md md:p-8 p-6 hover:-rotate-3 transition duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image
                      src={avatar}
                      alt={name}
                      width={120}
                      height={120}
                      className="max-h-full"
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-white/40">{position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{text}</p>
              </Card>
            </>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What clients say about me"
          eyebrow="Happy Clients"
          description="Customer satisfaction at the heart of my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 ">
            <WordList direction="left" duration={120} />
          </div>
        </div>
      </div>
    </div>
  );
};
