// src/components/ui/Tooltip.js

import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Tippy'nin CSS dosyasını da import etmeniz gerekiyor

export const Tooltip = ({ content, children }) => {
  return (
    <Tippy content={content}>
      <span>{children}</span>
    </Tippy>
  );
};

export const TooltipTrigger = ({ children }) => {
  return <>{children}</>;
};

export const TooltipContent = ({ children }) => {
  return <>{children}</>;
};

export default Tooltip;
