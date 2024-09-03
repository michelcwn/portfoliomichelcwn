import React from 'react';

const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 rounded-xl fill-[url(#tech)] " />
      <svg className="size-0 absolute">
        <linearGradient id="tech">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" />
          <stop offset="100%" stopColor="rgb(56, 189, 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
