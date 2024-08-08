"use client"; // This directive indicates that this is a Client Component

import confetti from "canvas-confetti";
import { useCallback } from "react";

const ConfettiTrigger = () => {
  const triggerConfetti = useCallback(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <span onClick={triggerConfetti} className="cursor-pointer ">
      Briska Ananda
    </span>
  );
};

ConfettiTrigger.displayName = "ConfettiTrigger";

export default ConfettiTrigger;
