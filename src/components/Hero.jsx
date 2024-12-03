import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-center h-full gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            Hi, I'm <span className="text-[#915eff]">Your Name</span>
          </h1>
          <p className="text-secondary text-lg mt-4 max-w-lg">
            A passionate developer focused on creating interactive and user-friendly web applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-[#915eff] text-white px-6 py-3 rounded-lg font-medium"
          >
            Contact Me
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full object-cover rounded-full border-4 border-[#915eff]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-[#915eff] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;