import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import '../App.css';

const ConfettiAnimation: React.FC = () => {
  useEffect(() => {
    const duration = 3 * 1000; // 3 seconds
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: Math.random(), y: 0.6 },
        colors: ['#f06', '#f36', '#f90', '#fc0']
      });
    }, 200);
  }, []);

  return null;
};

export default ConfettiAnimation;
