'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const words: string[] = [
  'Performant',
  'Secure',
  'Accessible',
  'Interactive',
  'Scalable',
  'Usable',
  'Search Optimized',
  'Responsive',
  'Efficient',
  'Intuitive',
  'Robust',
  'Reliable',
  'Modular',
  'Maintainable',
  'User-friendly',
  'Innovative',
];

interface WordListProps {
  direction: 'left' | 'right';
  duration: number;
}

const WordList: React.FC<WordListProps> = ({ direction, duration }) => (
  <motion.div
    animate={{
      translateX: direction === 'left' ? '-100%' : '0%',
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    }}
    className="flex flex-none gap-4 py-3 pr-4"
  >
    {[...new Array(2)].fill(0).map((_, index) => (
      <React.Fragment key={index}>
        {words.map((word) => (
          <div className="inline-flex items-center gap-4" key={word}>
            <span className="text-gray-900 uppercase font-semibold text-sm">
              {word}
            </span>
            <FaStar className="size-4 text-gray-900 -rotate-10" />
          </div>
        ))}
      </React.Fragment>
    ))}
  </motion.div>
);

export const TapeSection: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-indigo-400 to-sky-400 -rotate-3 -mx-1">
        <div className="flex flex-col [mask-image:linear-gradient(to_right,transparent,black_10%,black,black_90%,transparent)]">
          <WordList direction="left" duration={30} />
        </div>
      </div>
    </div>
  );
};
