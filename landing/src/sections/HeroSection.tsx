import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import portraitImage from '../assets/hero-portrait.png';

const NAV_LINKS = [
  { label: 'About', href: 'about.html' },
  { label: 'Projects', href: 'list.html' },
];

export default function HeroSection() {
  const [leaving, setLeaving] = useState(false);

  const goToList = () => {
    setLeaving(true);
  };

  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(() => {
      window.location.href = 'list.html';
    }, 380);
    return () => clearTimeout(timer);
  }, [leaving]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') goToList();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
      animate={leaving ? { opacity: 0, scale: 0.97 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden w-full mt-10 sm:mt-8 md:mt-6 lg:mt-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m SOHEE
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex justify-end items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={goToList} />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[3vh] h-[46vh] sm:h-[52vh] md:h-[58vh] lg:h-[62vh] max-h-[760px]">
        <FadeIn delay={0.6} y={30} className="h-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="h-full"
          >
            <img
              src={portraitImage}
              alt="SOHEE portrait"
              className="h-full w-auto select-none pointer-events-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </motion.div>
  );
}
