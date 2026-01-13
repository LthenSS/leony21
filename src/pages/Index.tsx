import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarryBackground from "@/components/StarryBackground";
import OpeningScene from "@/components/OpeningScene";
import LoginScene from "@/components/LoginScene";
import MainBirthdayScene from "@/components/MainBirthdayScene";
import ClosingScene from "@/components/ClosingScene";
import Confetti from "@/components/Confetti";

type Scene = "opening" | "login" | "main" | "closing";

const Index = () => {
  const [currentScene, setCurrentScene] = useState<Scene>("opening");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLoginSuccess = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setCurrentScene("main");
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarryBackground />
      
      {showConfetti && <Confetti />}

      <AnimatePresence mode="wait">
        {currentScene === "opening" && (
          <motion.div
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <OpeningScene onContinue={() => setCurrentScene("login")} />
          </motion.div>
        )}

        {currentScene === "login" && (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <LoginScene onSuccess={handleLoginSuccess} />
          </motion.div>
        )}

        {currentScene === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MainBirthdayScene />
            <ClosingScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
