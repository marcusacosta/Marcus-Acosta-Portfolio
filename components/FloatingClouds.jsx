import { useEffect, useState } from 'react';

export default function FloatingClouds() {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    // Generate random clouds with different properties
    const generateClouds = () => {
      const cloudCount = 12;
      const newClouds = [];
      
      for (let i = 0; i < cloudCount; i++) {
        newClouds.push({
          id: i,
          x: Math.random() * 100, // Random starting position
          y: Math.random() * 100,
          size: Math.random() * 80 + 60, // Random size between 60-140px
          speed: Math.random() * 0.5 + 0.2, // Random speed
          opacity: Math.random() * 0.6 + 0.3, // Random opacity between 0.3-0.9
          delay: Math.random() * 10 // Random delay for staggered animation
        });
      }
      
      setClouds(newClouds);
    };

    generateClouds();
  }, []);

  return (
    <div className="floating-clouds">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            opacity: cloud.opacity,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${20 / cloud.speed}s`
          }}
        />
      ))}
    </div>
  );
}
