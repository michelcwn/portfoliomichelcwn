import React, { Fragment } from 'react';
import TechIcon from './TechIcon';
import { twMerge } from 'tailwind-merge';

const ToolboxItems = ({
  items,
  itemsWrapperClassName,
  className,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6 ',
          itemsWrapperClassName
        )}
      >
        {items.map(({ iconType, title }) => (
          <div
            key={title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg "
          >
            <TechIcon component={iconType} />
            <span className="font-semibold">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
