import React from 'react';
import './Panel.css';

const PanelSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
};

export const Panel = ({ children, size }) => (
  <div className={`panel panel--${size}`}>
    {children}
  </div>
);

Panel.defaultProps = {
  size: PanelSizes.SM,
};
