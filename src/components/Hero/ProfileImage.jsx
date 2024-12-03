import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex justify-center items-center"
    >
      <div className="relative w-64 h-64 sm:w-72 sm:h-72">
        <div
          className="w-full h-full rounded-full border-4 border-[#915eff] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}profile-placeholder.jpg')`
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-dashed border-[#915eff] rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;