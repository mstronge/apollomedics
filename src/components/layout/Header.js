import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../../svg/Logo';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Logo />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
      <AnchorLink className="px-4" href="#home">
      Home
    </AnchorLink>
        <AnchorLink className="px-4" href="#features">
          What We Do
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Contact Us</Button>
      </div>
    </div>
  </header>
);

export default Header;
