import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Flame } from "lucide-react";

const ClosingScene = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [blowing, setBlowing] = useState(false);

  const handleBlowCandles = () => {
    setBlowing(true);
    setTimeout(() => {
      setCandlesLit(false);
      setBlowing(false);
      setTimeout(() => {
        setShowFinalMessage(true);
      }, 1000);
    }, 1500);
  };

  return (
    <motion.div
      id="closing-scene"
      className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Ambient glows */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, hsl(45 90% 65% / 0.5), transparent 70%)"
        }}
      />

      <motion.div
        className="relative z-10 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Birthday Cake */}
        <motion.div
          className="relative mb-8"
          animate={blowing ? { x: [-2, 2, -2, 2, 0] } : {}}
          transition={{ duration: 0.3, repeat: blowing ? 5 : 0 }}
        >
          {/* Cake Base */}
          <div className="relative mx-auto w-64 h-48">
            {/* Plate */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-8 rounded-full"
              style={{
                background: "linear-gradient(180deg, hsl(45 20% 90%), hsl(45 20% 80%))",
                boxShadow: "0 10px 30px hsl(0 0% 0% / 0.3)",
              }}
            />
            
            {/* Bottom layer */}
            <div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 h-16 rounded-t-lg"
              style={{
                background: "linear-gradient(180deg, hsl(330 60% 80%), hsl(330 50% 70%))",
                boxShadow: "inset 0 -5px 15px hsl(330 50% 60% / 0.5)",
              }}
            />
            
            {/* Middle layer */}
            <div 
              className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-14 rounded-t-lg"
              style={{
                background: "linear-gradient(180deg, hsl(340 70% 85%), hsl(340 60% 75%))",
                boxShadow: "inset 0 -5px 15px hsl(340 60% 65% / 0.5)",
              }}
            />
            
            {/* Top layer */}
            <div 
              className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-12 rounded-t-lg"
              style={{
                background: "linear-gradient(180deg, hsl(0 0% 98%), hsl(340 80% 90%))",
                boxShadow: "inset 0 -5px 15px hsl(340 60% 80% / 0.5)",
              }}
            />

            {/* Frosting decorations */}
            <div className="absolute bottom-[130px] left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-6 rounded-full"
                  style={{
                    background: i % 2 === 0 
                      ? "linear-gradient(180deg, hsl(330 70% 70%), hsl(330 60% 60%))"
                      : "linear-gradient(180deg, hsl(45 90% 65%), hsl(45 80% 55%))",
                  }}
                />
              ))}
            </div>

            {/* Candles */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex items-end gap-6">
              {/* Number 2 candle */}
              <div className="relative flex flex-col items-center">
                <AnimatePresence>
                  {candlesLit && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0, y: -20 }}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        scale: { duration: 0.5, repeat: Infinity },
                        rotate: { duration: 0.3, repeat: Infinity },
                      }}
                    >
                      <Flame 
                        className="text-orange-400" 
                        size={28} 
                        fill="currentColor"
                        style={{
                          filter: "drop-shadow(0 0 10px hsl(30 100% 60%))",
                        }}
                      />
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full blur-sm opacity-80"
                        style={{ background: "hsl(45 100% 70%)" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div 
                  className="w-6 h-12 rounded-t-sm"
                  style={{
                    background: "linear-gradient(90deg, hsl(270 50% 75%), hsl(270 40% 65%))",
                  }}
                />
                <span className="text-foreground font-bold text-xl mt-1">2</span>
              </div>
              
              {/* Number 1 candle */}
              <div className="relative flex flex-col items-center">
                <AnimatePresence>
                  {candlesLit && (
                    <motion.div
                      className="relative"
                      initial={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0, y: -20 }}
                      animate={{
                        scale: [1.1, 0.9, 1.1],
                        rotate: [5, -5, 5],
                      }}
                      transition={{
                        scale: { duration: 0.4, repeat: Infinity },
                        rotate: { duration: 0.25, repeat: Infinity },
                      }}
                    >
                      <Flame 
                        className="text-orange-400" 
                        size={28} 
                        fill="currentColor"
                        style={{
                          filter: "drop-shadow(0 0 10px hsl(30 100% 60%))",
                        }}
                      />
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full blur-sm opacity-80"
                        style={{ background: "hsl(45 100% 70%)" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div 
                  className="w-6 h-12 rounded-t-sm"
                  style={{
                    background: "linear-gradient(90deg, hsl(330 70% 70%), hsl(330 60% 60%))",
                  }}
                />
                <span className="text-foreground font-bold text-xl mt-1">1</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blow candles button */}
        <AnimatePresence>
          {candlesLit && !blowing && (
            <motion.button
              className="mb-8 px-8 py-4 rounded-full font-semibold text-background glow-pink"
              style={{
                background: "linear-gradient(135deg, hsl(330 70% 70%), hsl(270 50% 75%))",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBlowCandles}
            >
              🎂 Tiup Lilin & Make a Wish ✨
            </motion.button>
          )}
        </AnimatePresence>

        {/* Final Message */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.h2
                className="font-serif text-4xl md:text-6xl text-gradient-romantic"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(330 70% 70% / 0.4)",
                    "0 0 40px hsl(330 70% 70% / 0.7)",
                    "0 0 20px hsl(330 70% 70% / 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Happy 21st Birthday
              </motion.h2>
              <motion.p
                className="text-3xl md:text-4xl text-gradient-gold font-serif italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                My Love 💕
              </motion.p>
              <motion.div
                className="glass-card rounded-2xl p-6 md:p-8 max-w-lg mx-auto mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-foreground/80 text-lg italic">
                  "From someone who will always choose you."
                </p>
                <p className="text-primary font-semibold mt-4 text-xl">
                  — Scubaa24 💖
                </p>
              </motion.div>

              {/* Hearts animation */}
              <motion.div
                className="flex justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {["❤️", "💕", "💖", "💗", "💝"].map((heart, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    {heart}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ClosingScene;
