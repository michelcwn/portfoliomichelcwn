'use client';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/michel-chan-wai-nam-842bb912b/',
    iconType: <FaLinkedin className="w-6 h-6" />,
  },
  {
    title: 'Github',
    href: 'https://github.com/michelcwn',
    iconType: <FaGithub className="w-6 h-6" />,
  },
];

export const Footer = () => {
  return (
    <footer className="pt-20 relative z-10 overflow-x-clip">
      <div className="absolute h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-500/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-white/60">&copy; 2024 by michelcwn</div>
          {/*  */}
          <nav className="flex flex-col md:flex-row items-center gap-4">
            {footerLinks.map(({ title, href, iconType }) => (
              <div className="inline-flex items-center gap-1.5" key={title}>
                <a href={href} target="_blank" className="h-25 w-25">
                  <span className="">{iconType}</span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
