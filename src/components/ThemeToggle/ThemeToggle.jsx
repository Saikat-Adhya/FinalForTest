import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-tertiary"
    >
      {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </motion.button>
  );
};

export default ThemeToggle;