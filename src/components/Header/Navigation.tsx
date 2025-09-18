import clsx from 'clsx';
import { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className='flex items-center gap-[50px]'>
      <ul className='flex items-center gap-[8px] w-full bg-[#f2f3f5] rounded-full border border-[rgba(225,225,226,0.46)] px-[3px] h-[33px]'>
        <li>
          <a
            href='home'
            onClick={() => {
              setActiveLink('home');
            }}
            className={clsx(
              'konnect',
              ' px-[10px] py-[8px] rounded-full hover:bg-[#303030] hover:text-[#fbfbfc]',
              activeLink === 'home'
                ? 'bg-[#303030] text-[#fbfbfc]'
                : 'text-[#aeb0b1] bg-transparent '
            )}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#about'
            onClick={() => {
              setActiveLink('about');
            }}
            className={clsx(
              'konnect',
              ' px-[10px] py-[8px] rounded-full hover:bg-[#303030] hover:text-[#fbfbfc]',
              activeLink === 'about'
                ? 'bg-[#303030] text-[#fbfbfc]'
                : 'text-[#aeb0b1] bg-transparent '
            )}
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#how-it-works'
            onClick={() => {
              setActiveLink('how-it-works');
            }}
            className={clsx(
              'konnect',
              ' px-[10px] py-[8px] rounded-full hover:bg-[#303030] hover:text-[#fbfbfc]',
              activeLink === 'how-it-works'
                ? 'bg-[#303030] text-[#fbfbfc]'
                : 'text-[#aeb0b1] bg-transparent '
            )}
          >
            How it works
          </a>
        </li>
        <li>
          <a
            href='#token-design'
            onClick={() => {
              setActiveLink('token-design');
            }}
            className={clsx(
              'konnect',
              ' px-[10px] py-[8px] rounded-full hover:bg-[#303030] hover:text-[#fbfbfc]',
              activeLink === 'token-design'
                ? 'bg-[#303030] text-[#fbfbfc]'
                : 'text-[#aeb0b1] bg-transparent '
            )}
          >
            Token design
          </a>
        </li>
        <li>
          <a
            href='#yard-flywheel'
            onClick={() => {
              setActiveLink('yard-flywheel');
            }}
            className={clsx(
              'konnect',
              ' px-[10px] py-[8px] rounded-full hover:bg-[#303030] hover:text-[#fbfbfc]',
              activeLink === 'yard-flywheel'
                ? 'bg-[#303030] text-[#fbfbfc]'
                : 'text-[#aeb0b1] bg-transparent '
            )}
          >
            YARD flywheel
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
