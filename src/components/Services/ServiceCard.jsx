import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-tertiary p-6 rounded-xl shadow-lg"
    >
      <div className="w-12 h-12 bg-[#915eff] rounded-full flex items-center justify-center mb-4">
        <Icon className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;