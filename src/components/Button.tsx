import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = "font-label-md uppercase tracking-wider rounded transition-all duration-300 active:opacity-80 disabled:opacity-50";

  const variantClasses = {
    primary: "bg-secondary text-primary-container hover:bg-secondary-fixed shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
    secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]",
    outline: "bg-transparent border border-outline hover:border-secondary hover:bg-secondary/10 text-on-surface backdrop-blur-sm",
    ghost: "bg-transparent text-on-surface hover:text-secondary hover:bg-surface-container-high",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;