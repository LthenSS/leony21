import { motion } from "framer-motion";
import FloatingBalloons from "./FloatingBalloons";

interface OpeningSceneProps {
  onContinue: () => void;
}

const OpeningScene = ({ onContinue }: OpeningSceneProps) => {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <FloatingBalloons />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="mb-8"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-6xl">✨</span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-gradient-romantic mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Welcome to a<br />
          <span className="text-gradient-gold">Special Birthday</span><br />
          Surprise
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Sebuah kejutan spesial telah disiapkan untukmu 💕
        </motion.p>

        <motion.button
          className="px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden group glow-pink"
          style={{
            background: "linear-gradient(135deg, hsl(330 70% 70%), hsl(270 50% 75%))",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
        >
          <span className="relative z-10 text-background flex items-center gap-2">
            Mulai Kejutan
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {["🎈", "🎂", "🎁", "🎈"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OpeningScene;
