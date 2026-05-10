import React from 'react';

interface KenteDividerProps {
  className?: string;
  opacity?: number;
  altStyle?: boolean;
}

const KenteDivider: React.FC<KenteDividerProps> = ({
  className = '',
  opacity = 100,
  altStyle = false
}) => {
  return (
    <div
      className={`w-full h-[2px] ${altStyle ? 'kente-stitch-alt' : 'kente-stitch'} opacity-${opacity} ${className}`}
    ></div>
  );
};

export default KenteDivider;