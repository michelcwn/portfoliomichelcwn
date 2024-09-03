'use client';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { CiCircleCheck } from 'react-icons/ci';
import { GoArrowUpRight } from 'react-icons/go';

const portfolioProjects = [
  {
    company: 'Pulsar Pixel',
    year: '2024',
    title: 'Freelance Developer',
    results: [
      { title: 'Develop your online presence' },
      { title: 'Boost your traffic' },
      { title: 'Increase your visibility' },
    ],
    link: 'https://pulsar-pixel.com/',
    image: '/images/pulsar-pixel.png',
  },
  {
    company: 'Forkify',
    year: '2023',
    title: 'Pizza recipe app',
    results: [
      { title: 'Search for pizza recipes' },
      { title: 'Find innovative recipes' },
      { title: 'Save time' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: '/images/food.png',
  },
  {
    company: 'MindPulse',
    year: '2024',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Unleash your productivity' },
      { title: 'Chat Smarter, Not Harder' },
      { title: 'Smart Automation' },
    ],
    link: 'https://mindpulse.netlify.app/',
    image: '/images/mind.png',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title=" Featured Projects"
          description="Innovative solutions for unique digital challenges"
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map(
            ({ title, year, company, results, link, image }, idx) => (
              <Card
                key={title}
                className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${idx * 40}px ) `,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-indigo-500 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                      <span>{company}</span>
                      <span>&bull;</span>
                      <span>{year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {results.map((result) => (
                        <li className="flex gap-2 text-sm md:text-base text-white/50">
                          <CiCircleCheck className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                        <span> View live site</span>
                        <GoArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>

                  <div className="lg:relative">
                    <Image
                      src={image}
                      alt={title}
                      width={650}
                      height={650}
                      className="mt-8 -mb-4 lg:mt-0 lg:absolute lg:h-full lg:max-w-none"
                    />{' '}
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};
