import React from 'react';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'panel' | 'modal';
  children: React.ReactNode;
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  variant = 'panel',
  children,
  className = '',
  ...props
}) => {
  const variantClasses = {
    panel: "bg-surface-container/40 backdrop-blur-[12px] border border-outline-variant/20 rounded-lg",
    modal: "glass-modal rounded-xl"
  };

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassPanel;