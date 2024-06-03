// src/components/ui/Button.js

import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn('btn', className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
