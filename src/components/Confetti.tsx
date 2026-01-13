import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  size: number;
}

const colors = [
  "hsl(330 70% 70%)",
  "hsl(270 50% 75%)",
  "hsl(45 90% 65%)",
  "hsl(340 80% 85%)",
  "hsl(0 0% 98%)",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generatedPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      generatedPieces.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        size: Math.random() * 10 + 5,
      });
    }
    setPieces(generatedPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: -20,
            width: piece.size,
            height: piece.size * 1.5,
            backgroundColor: piece.color,
            borderRadius: "2px",
          }}
          initial={{ y: -50, rotate: 0, opacity: 1 }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, piece.rotation, piece.rotation * 2],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
