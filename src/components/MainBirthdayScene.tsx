import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingHearts from "./FloatingHearts";

const MainBirthdayScene = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSection((prev) => (prev < 3 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FloatingHearts />

      {/* Ambient glows */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(330 70% 70% / 0.5), transparent 70%)"
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 75% / 0.5), transparent 70%)"
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {currentSection >= 0 && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-4 leading-tight"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(330 70% 70% / 0.3)",
                    "0 0 40px hsl(330 70% 70% / 0.5)",
                    "0 0 20px hsl(330 70% 70% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Selamat Ulang Tahun
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                yang ke-<span className="text-gradient-gold font-bold">21</span>
              </motion.p>
            </motion.div>
          )}

          {currentSection >= 1 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <motion.h2
                className="font-serif text-4xl md:text-6xl text-gradient-gold italic"
                animate={{
                  textShadow: [
                    "0 0 15px hsl(45 90% 65% / 0.4)",
                    "0 0 30px hsl(45 90% 65% / 0.7)",
                    "0 0 15px hsl(45 90% 65% / 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Leony Putri Ayu Sitinjak
              </motion.h2>
              <motion.p
                className="text-3xl mt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                🎉💖
              </motion.p>
            </motion.div>
          )}

          {currentSection >= 2 && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 mb-8"
            >
              <motion.p
                className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Di usia ke-21 ini, semoga semua impianmu semakin dekat,
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                senyummu selalu bahagia,
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-primary leading-relaxed font-medium mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                dan aku ingin selalu ada di setiap langkahmu.
              </motion.p>
            </motion.div>
          )}

          {currentSection >= 3 && (
            <motion.div
              key="affirmations"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {["I'm proud of you", "I love you"].map((text, index) => (
                <motion.div
                  key={text}
                  className="px-6 py-3 rounded-full glow-pink"
                  style={{
                    background: index === 0 
                      ? "linear-gradient(135deg, hsl(330 70% 70%), hsl(330 60% 60%))"
                      : "linear-gradient(135deg, hsl(45 90% 65%), hsl(45 80% 55%))",
                  }}
                  initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-background font-semibold text-lg">
                    {text} 💕
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue button */}
        {currentSection >= 3 && (
          <motion.button
            className="mt-12 px-8 py-4 rounded-full font-semibold text-background glow-gold"
            style={{
              background: "linear-gradient(135deg, hsl(45 90% 65%), hsl(45 80% 55%))",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("closing-scene");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Lanjutkan ✨
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default MainBirthdayScene;
