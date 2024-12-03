import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-6 sm:px-8 bg-tertiary">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 text-secondary">
          <span>Made by</span>
          <FaHeart className="text-[#915eff]" />
          <span>Saikat Adhya</span>
        </div>
        <p className="mt-2 text-sm text-secondary">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;