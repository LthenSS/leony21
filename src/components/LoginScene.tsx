import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, User, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ParticleEffect from "./ParticleEffect";

interface LoginSceneProps {
  onSuccess: () => void;
}

const LoginScene = ({ onSuccess }: LoginSceneProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleLogin = () => {
    const correctUsername = "Scubaa24";
    const correctPassword = "24062004";

    if (username === correctUsername && password === correctPassword) {
      setError("");
      onSuccess();
    } else {
      setAttempts((prev) => prev + 1);
      const errorMessages = [
        "Ups… coba ingat orang yang paling mencintaimu 😉",
        "Hmm... siapa ya yang selalu ada untukmu? 💕",
        "Petunjuk: Nama lengkap + tanggal lahir orang tersayang 💖",
        "Coba lagi! Kamu pasti bisa 🌹",
      ];
      setError(errorMessages[Math.min(attempts, errorMessages.length - 1)]);
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ParticleEffect />

      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative glow */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(330 70% 70% / 0.4), transparent 70%)"
          }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(45 90% 65% / 0.3), transparent 70%)"
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 glow-pink"
              style={{
                background: "linear-gradient(135deg, hsl(330 70% 70%), hsl(270 50% 75%))"
              }}
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(330 70% 70% / 0.4)",
                  "0 0 40px hsl(330 70% 70% / 0.7)",
                  "0 0 20px hsl(330 70% 70% / 0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-8 h-8 text-background" />
            </motion.div>
            
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Secret Surprise
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Hanya orang spesial yang tahu jawabannya 💖
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Pecahkan teka-teki untuk membuka kejutan ulang tahun
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Nama lengkap pasangan..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-12 bg-muted/50 border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/60 h-12 rounded-xl focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Tanggal lahir pasangan (ddmmyyyy)..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 bg-muted/50 border-muted-foreground/20 text-foreground placeholder:text-muted-foreground/60 h-12 rounded-xl focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-primary text-sm text-center p-3 rounded-xl bg-primary/10"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleLogin}
                className="w-full h-12 rounded-xl font-semibold text-base relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, hsl(330 70% 70%), hsl(270 50% 75%))",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Buka Kejutan
                  <Heart className="w-5 h-5" fill="currentColor" />
                </span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, hsl(330 60% 60%), hsl(270 40% 65%))",
                  }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hint */}
          <motion.p
            className="text-center text-xs text-muted-foreground/60 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            💡 Petunjuk: Nama panjang & tanggal lahir orang yang mencintaimu
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginScene;
