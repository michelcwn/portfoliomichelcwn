'use client';

import { motion } from 'framer-motion';
import React from 'react';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';

interface Item {
  title: string;
  iconType: React.ElementType;
}

interface ListProps {
  direction: 'left' | 'right';
  duration: number;
  items: Item[];
}

const ItemsList: React.FC<ListProps> = ({ direction, duration, items }) => (
  <motion.div
    animate={{
      translateX: direction === 'left' ? ['-100%', '0%'] : ['0%', '-100%'],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    }}
    className="flex flex-none gap-4 py-3"
  >
    {[...new Array(2)].map((_, index) => (
      <React.Fragment key={index}>
        {items.map(({ iconType, title }) => (
          <div
            key={title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={iconType} />
            <span className="font-semibold">{title}</span>
          </div>
        ))}
      </React.Fragment>
    ))}
  </motion.div>
);

interface ToolboxItemsProps {
  items: Item[];
  className?: string;
  itemsWrapperClassName?: string;
  direction?: 'left' | 'right';
}

const ToolboxItems: React.FC<ToolboxItemsProps> = ({
  items,
  itemsWrapperClassName,
  className,
  direction = 'left',
}) => {
  return (
    <div
      className={twMerge(
        'flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6',
          itemsWrapperClassName
        )}
      >
        <ItemsList direction={direction} duration={60} items={items} />
        <ItemsList direction={direction} duration={60} items={items} />
      </div>
    </div>
  );
};

export default ToolboxItems;
