// src/components/ui/Card.js

import React from 'react';

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className, ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h2 className={`card-title ${className}`} {...props}>
      {children}
    </h2>
  );
};

export const CardDescription = ({ children, className, ...props }) => {
  return (
    <p className={`card-description ${className}`} {...props}>
      {children}
    </p>
  );
};
