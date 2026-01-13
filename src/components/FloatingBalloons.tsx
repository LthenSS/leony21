import { motion } from "framer-motion";

const FloatingBalloons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Balloon 2 */}
      <motion.div
        className="absolute left-[15%] top-[20%]"
        animate={{
          y: [-10, 10, -10],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div 
            className="w-24 h-28 rounded-full glow-pink"
            style={{
              background: "linear-gradient(135deg, hsl(330 70% 75%), hsl(330 60% 55%))",
            }}
          />
          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-10"
            style={{ background: "hsl(330 70% 70%)" }}
          />
        </div>
      </motion.div>

      {/* Balloon 1 */}
      <motion.div
        className="absolute right-[20%] top-[15%]"
        animate={{
          y: [-15, 15, -15],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="relative">
          <div 
            className="w-20 h-24 rounded-full glow-gold"
            style={{
              background: "linear-gradient(135deg, hsl(45 90% 70%), hsl(45 80% 50%))",
            }}
          />
          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-10"
            style={{ background: "hsl(45 90% 65%)" }}
          />
        </div>
      </motion.div>

      {/* Number 21 Balloons */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[10%]"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-4">
          {/* Number 2 */}
          <motion.div 
            className="text-8xl font-serif font-bold text-gradient-gold glow-gold"
            style={{
              textShadow: "0 0 40px hsl(45 90% 65% / 0.6)",
            }}
            animate={{ 
              textShadow: [
                "0 0 20px hsl(45 90% 65% / 0.4)",
                "0 0 40px hsl(45 90% 65% / 0.8)",
                "0 0 20px hsl(45 90% 65% / 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            2
          </motion.div>
          {/* Number 1 */}
          <motion.div 
            className="text-8xl font-serif font-bold text-gradient-gold"
            style={{
              textShadow: "0 0 40px hsl(45 90% 65% / 0.6)",
            }}
            animate={{ 
              textShadow: [
                "0 0 20px hsl(45 90% 65% / 0.4)",
                "0 0 40px hsl(45 90% 65% / 0.8)",
                "0 0 20px hsl(45 90% 65% / 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            1
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingBalloons;
