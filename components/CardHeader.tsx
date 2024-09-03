import React from 'react';
import { FaStarOfLife } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
      <div className="inline-flex items-center gap-3">
        <FaStarOfLife className="size-6 text-indigo-500" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
