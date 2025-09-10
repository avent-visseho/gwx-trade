import React from 'react';
import { cn } from '../../utils/cn';

const Container = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
      className
    )}
    {...props}
  />
));

Container.displayName = 'Container';

export default Container;