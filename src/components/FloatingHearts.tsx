import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartData {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts = () => {
  const hearts: HeartData[] = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5,
    size: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.x}%`,
            bottom: -50,
          }}
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Heart 
            size={heart.size} 
            fill="currentColor" 
            style={{
              filter: "drop-shadow(0 0 10px hsl(330 70% 70% / 0.5))"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
