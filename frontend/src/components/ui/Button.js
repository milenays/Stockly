// src/components/ui/Button.js
import * as React from 'react';
import { cn } from '../../lib/utils'; // Correct import path

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    className={cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
      className
    )}
    ref={ref}
    {...props}
  />
));
Button.displayName = 'Button';

export default Button;
