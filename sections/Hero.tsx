import Image from 'next/image';
import { FaArrowDown, FaStarOfLife } from 'react-icons/fa6';
import HeroOrbit from '@/components/HeroOrbit';
export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        {/* grain */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url('/images/grain.jpg')`,
          }}
        />

        {/* rings */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* stars */}
        <HeroOrbit
          size={800}
          rotation={-70}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="8s"
        >
          <FaStarOfLife className="size-20 text-indigo-500" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <FaStarOfLife className="size-10 text-indigo-500" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <FaStarOfLife className="size-7 text-indigo-500" />
        </HeroOrbit>
        {/* opacity */}
        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <FaStarOfLife className="size-7 text-indigo-500/25" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={80}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <FaStarOfLife className="size-5 text-indigo-500/25" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="7s"
        >
          <FaStarOfLife className="size-10 text-indigo-500/25" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <FaStarOfLife className="size-14 text-indigo-500/25" />
        </HeroOrbit>

        {/* circles */}
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="9s"
        >
          <div className="size-3 rounded-full bg-indigo-500/25" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="12s"
        >
          <div className="size-2 rounded-full bg-indigo-500/25" />
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-2 rounded-full bg-indigo-500/25" />
        </HeroOrbit>
      </div>
      {/* container */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src="/images/memoji-computer.png"
            width={100}
            height={100}
            alt="dev"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            {/* <div className="bg-green-500 size-2 rounded-full animate-ping relative">
              <div className="absolute bg-green-500 inset-0 rounded-full animate-ping-large "></div>
            </div> */}
            <div className="relative flex h-3 w-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75">
                <div className="absolute bg-green-500 inset-0 rounded-full animate-ping-large "></div>
              </div>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
            </div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exeptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            From design to performance, imagine your ideal web application
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
          <a href="#work" className="z-50">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer z-50">
              <span className="font-semibold">Explore my Work</span>
              <FaArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact" className="z-50">
            {' '}
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl cursor-pointer z-50">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
